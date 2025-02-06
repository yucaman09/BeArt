import { Menubar } from "primereact/menubar";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const items = [
    {
      label: "Inicio",
      command: () => {
        navigate("/");
      },
    },

    {
      label: "Catalogo",
      command: () => {
        navigate("/catalog");
      },
    },
    {
      label: "Lista de precios",
      command: () => {
        navigate("/price-list");
      },
    },
    {
      label: "Proyectos",
      items: [
        {
          label: "To-Do List",
          command: () => {
            navigate("/to-do");
          },
        },
      ],
    },
    {
      label: "Sobre mi",
    },
    {
      label: "Contacto",
      command: () => {
        navigate("/contact");
      },
    },
  ];

  return (
    <div className="card">
      <Menubar model={items} className="flex justify-content-center" />
    </div>
  );
};

export default Header;
