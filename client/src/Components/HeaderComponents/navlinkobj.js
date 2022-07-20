export const types = [
    { name: <div style={{ padding: '1rem'}} >Home</div>, link: '/', id: 'dark' ,display: 'none'},
    { name: 'Products', link: '/products', id: 'dark' },
    { name: <h1 style={{ padding: '2rem'}} onClick={e => {e.preventDefault(); window.scrollTo(0,0)}}>Kleanse</h1>, link : '/', id: 'dark',display: 'none' },
    { name: 'Checkout', link: '/checkout', id: 'dark', display: 'none' },
    { name: <div style={{ padding: '1rem'}}>About</div>, link: '/about',id: 'dark', display: 'none'}
] 
export const typesDark = [
    { name: <div style={{ padding: '1rem'}} >Home</div>, link: '/', id: 'light', display: 'none'},
    { name: 'Products', link: '/products', id: 'light' },
    { name: <h1 style={{ padding: '2rem'}} onClick={e => {e.preventDefault(); window.scrollTo(0,0)}}>Kleanse</h1>, link : '/', id: 'light', display: 'none' },
    { name: 'Checkout', link: '/checkout', id: 'light', display: 'none' },
    { name: <div style={{ padding: '1rem'}}>About</div>, link: '/about',id: 'light', display: 'none' }
] 