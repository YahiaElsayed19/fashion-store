import Product from "@models/product";
import { connectToDB } from "@util/database";

export const GET = async (req) => {
    const url = new URL(req.url);
    let search = url.searchParams.get("search");
    try {
        await connectToDB();
        const products = await Product.find({
            $or: [
                { title: search },
                { type: search },
                { category: search },
                { gender: search },
            ],
        });
        return new Response(JSON.stringify(products), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 });
    }
};
