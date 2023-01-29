import Catalog from "../Catalog/Catalog";
import Loader from "../Loader/Loader";
import Top from "../Top/Top";

const topSales = [
    {
        "id": 65,
        "category": 15,
        "title": "Босоножки 'Keira'",
        "price": 7600,
        "images": [
            "https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/sandals_keira.jpg",
            "https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/sandals_keira_2.jpg"
        ]
    },
    {
        "id": 66,
        "category": 13,
        "title": "Босоножки 'Myer' с завязкой на щиколотке",
        "price": 34000,
        "images": [
            "https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/sandals_myer.jpg",
            "https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/sandals_myer_2.jpg"
        ]
    },
    {
        "id": 73,
        "category": 15,
        "title": "Супергеройские кеды",
        "price": 1400,
        "images": [
            "https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/superhero_sneakers.jpg"
        ]
    }
]

const catalogItems = [
    {
        "id": 20,
        "category": 13,
        "title": "Кроссовки как у Pharrell Williams",
        "price": 12000,
        "images": [
            "https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/pharrell_williams_sneakers.jpg",
            "https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/pharrell_williams_sneakers_2.jpg"
        ]
    },
    {
        "id": 21,
        "category": 13,
        "title": "Туфли принцессы",
        "price": 3000,
        "images": [
            "https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/princess_shoes.jpg",
            "https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/princess_shoes_2.jpg"
        ]
    },
    {
        "id": 22,
        "category": 13,
        "title": "Туфли с окошечками",
        "price": 4000,
        "images": [
            "https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/shoes_with_windows.jpg"
        ]
    },
    {
        "id": 23,
        "category": 13,
        "title": "Кеды с насекомым",
        "price": 3500,
        "images": [
            "https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/insect_sneakers.jpg",
            "https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/insect_sneakers_2.jpg"
        ]
    },
    {
        "id": 24,
        "category": 13,
        "title": "Туфли на выход",
        "price": 2500,
        "images": [
            "https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/outgoing_shoes.jpg",
            "https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/outgoing_shoes_2.jpg"
        ]
    },
    {
        "id": 25,
        "category": 13,
        "title": "Туфли императрицы",
        "price": 15000,
        "images": [
            "https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/empress's_slippers.jpg",
            "https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/empress's_slippers_2.jpg"
        ]
    }
]

const Home = () => {
    const loading = false;
    return (
        <div>
            {loading && <Loader />}
            <Top items={topSales} />
            <Catalog items={catalogItems} />
        </div>
    )
}

export default Home;