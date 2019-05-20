import SeuPerfil from "views/SeuPerfil.jsx";
import CadastroDoPais from "views/CadastroDoPais.jsx";
import CadastroDeUF from "views/CadastroDeUF.jsx";
import CadastroDoAeroporto from "views/CadastroDoAeroporto.jsx";
import CadastroDaRotaDoVoo from "views/CadastroDaRotaDoVoo.jsx";
import CadastroDoEquipamento from "views/CadastroDoEquipamento.jsx";
import CadastroDaCompAerea from "views/CadastroDaCompAerea.jsx";
import CadastroDaAeronave from "views/CadastroDaAeronave.jsx";
import CadastroDoVoo from "views/CadastroDoVoo.jsx";
import GerirDados from "views/GerirDados.jsx";


var routes = [
  {
    path: "/seu_perfil",
    name: "Seu Perfil",
    icon: "tim-icons icon-single-02",
    component: SeuPerfil,
    layout: "/admin"
  },
  {
    path: "/cadastro_do_pais",
    name: "Cadastro do país",
    icon: "tim-icons icon-map-big",
    component: CadastroDoPais,
    layout: "/admin"
  },
  {
    path: "/cadastro_de_uf",
    name: "Cadastro de UF",
    icon: "tim-icons icon-bank",
    component: CadastroDeUF,
    layout: "/admin"
  },
  {
    path: "/cadastro_do_aeroporto",
    name: "Cadastro do aeroporto",
    icon: "tim-icons icon-tag",
    component: CadastroDoAeroporto,
    layout: "/admin"
  },
  {
    path: "/cadastro_da_rota_do_voo",
    name: "Cadastro da rota do voo",
    icon: "tim-icons icon-world",
    component: CadastroDaRotaDoVoo,
    layout: "/admin"
  },
  {
    path: "/cadastro_do_equipamento",
    name: "Cadastro do equipamento",
    icon: "tim-icons icon-settings",
    component: CadastroDoEquipamento,
    layout: "/admin"
  },
  {
    path: "/cadastro_da_companhia aérea",
    name: "Cadastro da companhia aérea",
    icon: "tim-icons icon-square-pin ",
    component: CadastroDaCompAerea,
    layout: "/admin"
  },
  {
    path: "/cadastro_da_aeronave",
    name: "Cadastro da Aeronave",
    icon: "tim-icons icon-spaceship",
    component: CadastroDaAeronave,
    layout: "/admin"
  },

  {
    path: "/cadastro_do_voo",
    name: "Cadastro do Voo",
    icon: "tim-icons icon-send",
    component: CadastroDoVoo,
    layout: "/admin"
  },

  {
    path: "/gerir_dados",
    name: "Gerir dados",
    icon: "tim-icons icon-pencil",
    component: GerirDados,
    layout: "/admin"
  }

];
export default routes;
