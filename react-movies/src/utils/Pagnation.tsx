import { useEffect, useState } from "react";

export default function Pagnation(props: paginationProps) {
  const [linkModels, setLinkModels] = useState<linkModel[]>([]);

  function selectPage(link: linkModel) {
    if (link.page === props.currentPage) {
      return;
    }

    if (!link.enable) {
      return;
    }

    props.onChange(link.page);
  }

  function getClass(link: linkModel) {
    if (link.active) {
      return "active pointer";
    }

    if (!link.enable) {
      return "disable";
    }

    return "pointer";
  }

  useEffect(() => {
    const previousPageEnable = props.currentPage !== 1;
    const previousPage = props.currentPage - 1;
    const links: linkModel[] = [];

    links.push({
      text: "Previous",
      enable: previousPageEnable,
      page: previousPage,
      active: false,
    });

    for (let i = 0; i < props.totalAmountOfPages; i++) {
      if (
        i >= props.currentPage - props.radio &&
        i <= props.currentPage + props.radio
      ) {
        links.push({
          text: `${i}`,
          enable: true,
          page: i,
          active: props.currentPage === 1,
        });
      }
    }

    const nextPageEnable =
      props.currentPage !== props.totalAmountOfPages &&
      props.totalAmountOfPages > 0;
    const nextPage = props.currentPage + 1;

    links.push({
      text: "Next",
      enable: nextPageEnable,
      page: nextPage,
      active: false,
    });

    setLinkModels(links);
  }, [props.currentPage, props.totalAmountOfPages, props.radio]);

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {linkModels.map((link) => {
          return (
            <li
              key={link.text}
              onClick={() => {
                selectPage(link);
              }}
              className={`page-item cursor ${getClass(link)}`}
            >
              <span className="page-link">{link.text}</span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

interface linkModel {
  page: number;
  enable: boolean;
  text: string;
  active: boolean;
}

interface paginationProps {
  currentPage: number;
  totalAmountOfPages: number;
  radio: number;
  onChange(page: number): void;
}
