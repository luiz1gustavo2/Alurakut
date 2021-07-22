import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
    if (request.method === 'POST') {
        const TOKEN = '63f89b192c24f4b1326ca48e3d36c9';
        const client = new SiteClient(TOKEN);

        const registroCriado = await client.items.create({
            itemType: "990210",
            ...request.body,
            //title: "",
            //imageUrl: "",
            //creatorSlug: "",
        })

        response.json({
            dados: 'Algum dado',
            registroCriado: registroCriado,
        })
        return;
    }
}