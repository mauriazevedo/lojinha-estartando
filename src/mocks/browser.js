import { setupWorker, rest } from "msw";

const worker = setupWorker(
    rest.get('api/best-sellers', (req, res, ctx) =>{
        return res(ctx.json({
            items: [
                {
                    id: 1,
                    name: "Caneca Estartando Devs",
                    image: "https://i.ibb.co/Sn2wvSy/caneca.png",
                    price: 30.00
                },
                {
                    id: 2,
                    name: "Caneca Estartando Devs",
                    image: "https://i.ibb.co/Sn2wvSy/caneca.png",
                    price: 30.00
                },
                {
                    id: 3,
                    name: "Caneca Estartando Devs",
                    image: "https://i.ibb.co/Sn2wvSy/caneca.png",
                    price: 30.00
                },
                {
                    id: 4,
                    name: "Caneca Estartando Devs",
                    image: "https://i.ibb.co/Sn2wvSy/caneca.png",
                    price: 30.00
                }
            ]
        }))
    })
);

worker.start();