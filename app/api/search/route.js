import Product from "@models/product";
import { connectToDB } from "@util/database";

export const GET = async (req) => {
    const url = new URL(req.url);
    let searchTerm = url.searchParams.get("search");
    try {
        await connectToDB();
        const products = await Product.find({
            $or: [
                { title: searchTerm },
                { type: searchTerm },
                { category: searchTerm },
                { gender: searchTerm },
            ],
        });
        return new Response(JSON.stringify(products), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 });
    }
};
