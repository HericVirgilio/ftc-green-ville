import { ListaAdmConteudo } from "@/interface/lista-adm-conteudo.interface";

export const ListaAdmData:ListaAdmConteudo [] = [
    {
        img: "/dash.png",
        titulo: "Dashboard",
        h: 17,
        w: 17,
        link: '/admin'
    },
    {
        img: "/vendas.png",
        titulo: "Vendas",
        w: 15,
        h: 16,
        link: "/admin/vendas"
    },
    {
        img: "/estoque.png",
        titulo: "Estoque",
        w: 15,
        h: 16,
        link: '/admin/estoque'
    },
    {
        img: "/user.png",
        titulo: "Usuários",
        w: 15,
        h: 16,
        link: '/admin/usuarios'
    },
    {
        img: "/help.png",
        titulo: "Ajuda",
        w: 15,
        h: 16,
        link: '/admin/ajuda'
    }
]