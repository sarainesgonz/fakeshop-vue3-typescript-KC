
export interface Product {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    Category;
    images:      string[];
}


// llevar esta parte a otra interface
export interface Category {
    id:    number;
    name:  string;
    image: string;
}


