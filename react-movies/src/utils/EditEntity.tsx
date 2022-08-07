import axios, { AxiosError, AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { ReactElement } from "react-markdown/lib/react-markdown";
import { useHistory, useParams } from "react-router-dom";
import DisplayError from "./DisplayError";
import Loading from "./Loading";

export default function EditEntity<TCreation, TRead>(
  props: editEntityProps<TCreation, TRead>
) {
  const { id }: any = useParams();
  const [entity, setEntity] = useState<TCreation>();
  const [errors, setErrors] = useState<string[]>([]);
  const history = useHistory();

  useEffect(() => {
    axios.get(`${props.url}/${id}`).then((response: AxiosResponse<TRead>) => {
      setEntity(props.transform(response.data));
    });
  }, [id]);

  async function edit(entityToEdit: TCreation) {
    try {
      if (props.transformFormData) {
        const formData = props.transformFormData(entityToEdit);
        await axios({
          method: "put",
          url: `${props.url}/${id}`,
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await axios.put(`${props.url}/${id}`, entityToEdit);
      }

      history.push(props.indexURL);
    } catch (error) {
      const err = error as AxiosError;
      if (err.response) {
        setErrors(err.response.data);
      }
    }
  }

  return (
    <>
      <h3>Edit {props.entityName}</h3>
      <DisplayError errors={errors}></DisplayError>
      {entity ? props.children(entity, edit) : <Loading></Loading>}
    </>
  );
}

interface editEntityProps<TCreation, TRead> {
  url: string;
  transform(entity: TRead): TCreation;
  entityName: string;
  children(entity: TCreation, edit: (entity: TCreation) => void): ReactElement;
  indexURL: string;
  transformFormData?(model: TCreation): FormData;
}

EditEntity.defaultProps = {
  transform: (entity: any) => entity,
};
