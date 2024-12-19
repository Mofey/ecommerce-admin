import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { Product } from '@models/Product';
import { mongooseConnect } from '@lib/mongoose';

// Connect to MongoDB (singleton connection)
await mongooseConnect();

export async function POST(request) {
    try {
        const { title, description, price } = await request.json();
        const productDoc = await Product.create({ title, description, price });

        return NextResponse.json(productDoc, { status: 201 });
    } catch (error) {
        console.error('Error creating product:', error);
        return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
    }
}

export function OPTIONS() {
    return NextResponse.json({}, { status: 200 }); // Preflight response for CORS
}
