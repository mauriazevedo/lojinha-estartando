import { rest } from "msw";

export const handlers = [
    rest.get('api/best-sellers', (req, res, ctx) =>{
        return res(
            ctx.status(200),
            ctx.json({
            items: [
                {
                    id: 1,
                    name: "Caneca Estartando Devs",
                    image: "https://i.ibb.co/Sn2wvSy/caneca.png",
                    price: "30,00"
                },
                {
                    id: 2,
                    name: "Camiseta Estartando Devs",
                    image: "https://i.ibb.co/DfyhYqK/shirt.png",
                    price: "40,00"
                },
                {
                    id: 3,
                    name: "Moletom Estartando Devs",
                    image: "https://i.ibb.co/fDdbfH8/moletom.png",
                    price: "80,00"
                },
                {
                    id: 4,
                    name: "Caneta Estartando Devs",
                    image: "https://i.ibb.co/hsnWZmZ/caneta.png",
                    price: "10,00"
                }
            ]
        }))
    }),

    rest.get('api/releases', (req, res, ctx) =>{
        return res(
            ctx.status(200),
            ctx.json({
            items: [
                {
                    id: 5,
                    name: "Caderno Dev",
                    image: "https://i.ibb.co/FbnKKv4/caderno.png",
                    price: "30,00"
                },
                {
                    id: 6,
                    name: "Mochila Dev",
                    image: "https://i.ibb.co/sj45bv0/mochila.png",
                    price: "70,00"
                },
                {
                    id: 7,
                    name: "Boné Dev",
                    image: "https://i.ibb.co/0V3pPjY/bon.png",
                    price: "20,00"
                },
                {
                    id: 4,
                    name: "Caneta Estartando Devs",
                    image: "https://i.ibb.co/hsnWZmZ/caneta.png",
                    price: "10.00"
                }
            ]
        }))
    })
];



