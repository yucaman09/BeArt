import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";

const Header = () => {
  const navigate = useNavigate();

  const [isDarkOn, setIsDarkOn] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const logoHtml = document.querySelector(".p-menubar-start");
    logoHtml?.classList.add("mr-auto");

    const themeLink = document.getElementById("theme-link") as HTMLLinkElement;

    if (isDarkOn) {
      themeLink.href =
        "https://unpkg.com/primereact/resources/themes/lara-dark-cyan/theme.css";
      localStorage.setItem("theme", "dark");
    } else {
      themeLink.href =
        "https://unpkg.com/primereact/resources/themes/lara-light-cyan/theme.css";
      localStorage.setItem("theme", "light");
    }
  }, [isDarkOn]);

  const itemsMenu = [
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
  const startMenu = (
    <div className="flex justify-content-center align-items-center gap-3">
      <img alt="Logo" src="./src/assets/bear-toy.svg" height="30" />
      <h1 className="my-1">BeArt</h1>
    </div>
  );

  const endMenu = (
    <Button
      icon={isDarkOn ? "pi pi-moon" : "pi pi-sun"}
      rounded
      text
      severity="contrast"
      aria-label="Cancel"
      onClick={() => setIsDarkOn(!isDarkOn)}
    />
  );

  return (
    <div className="card">
      <Menubar
        model={itemsMenu}
        start={startMenu}
        end={endMenu}
        unstyled={false}
      />
    </div>
  );
};

export default Header;
