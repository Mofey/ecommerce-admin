"use client";

import Layout from "@/components/Layout"
import {useState} from 'react';
import axios from 'axios';

export default function NewProduct() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [error, setError] = useState(null);

    async function createProduct(ev) {
        ev.preventDefault();
        const data = { title, description, price };
        try {
            const response = await axios.post('http://localhost:3000/api/products', data);
            console.log('Product created:', response.data);
            // Reset form fields
            setTitle('');
            setDescription('');
            setPrice('');
            setError(null); // Clear any previous errors
        } catch (error) {
            console.error('Error creating product:', error);
            setError('Failed to create product');
        }
    }
    return(
        <Layout>
            <form onSubmit={createProduct}>
                <h1>New Product</h1>
                <label>Product name</label>
                <input
                type='text'
                placeholder='product name'
                value={title}
                onChange={ev => setTitle(ev.target.value)}/>
                <label>Description</label>
                <textarea
                placeholder='description'
                value={description}
                onChange={ev => setDescription(ev.target.value)} />
                <label>Price (in USD)</label>
                <input
                type='number'
                placeholder='price'
                value={price}
                onChange={ev => setPrice(ev.target.value)} />
                <button type='submit' className='btn-primary'>
                    Save
                </button>
            </form>
        </Layout>
    )
}