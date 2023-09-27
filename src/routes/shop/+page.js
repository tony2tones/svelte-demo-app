export const load = async ({fetch}) => {
    const fetchProducts = async () => {
    const productsRes = await fetch('https://dummyjson.com/products?limit=10')
    const productData = await productsRes.json()
    return productData.products
    }

    const fetchusers = async () => {
        const userssRes = await fetch('https://dummyjson.com/users?limit=10')
        const usersData = await userssRes.json()
        return usersData.products
        }
    return {
        products:fetchProducts(),
        users: fetchusers()
    }
}