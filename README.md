# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)











import iphone from "./iphone.png"

function Products() {
    const phones = [
        {
            title: "iPhone 15 Pro Max",
            image: "https://avatars.mds.yandex.net/i?id=56b9d52790b1f8d174843f8c4dbe8081_l-5459902-images-thumbs&n=13",
            description: "Флагманский смартфон Apple с титановым корпусом, чипом A17 Pro и камерой 48 МП.",
            price: 129990
        },
        {
            title: "Samsung Galaxy S24 Ultra",
            image: "https://avatars.mds.yandex.net/get-mpic/18756250/2a0000019f7fcacbfc1a39e3590516fa3911/orig",
            description: "Премиум-смартфон с S Pen, 200 МП камерой и дисплеем Dynamic AMOLED 2X.",
            price: 119990
        },
        {
            title: "Xiaomi 14 Pro",
            image: "https://example.com/images/xiaomi14pro.jpg",
            description: "Смартфон с камерой Leica, процессором Snapdragon 8 Gen 3 и быстрой зарядкой 120 Вт.",
            price: 79990
        },
        {
            title: "Google Pixel 8 Pro",
            image: "https://example.com/images/pixel8pro.jpg",
            description: "Смартфон с чистым Android, чипом Tensor G3 и лучшей AI-камерой.",
            price: 89990
        },
        {
            title: "OnePlus 12",
            image: "https://example.com/images/oneplus12.jpg",
            description: "Флагман с дисплеем 120 Гц, Snapdragon 8 Gen 3 и зарядкой SuperVOOC 100 Вт.",
            price: 69990
        },
        {
            title: "Huawei P60 Pro",
            image: "https://example.com/images/huaweip60pro.jpg",
            description: "Смартфон с камерой XMAGE, изогнутым дисплеем и технологией SuperCharge.",
            price: 74990
        },
        {
            title: "Realme GT 5 Pro",
            image: "https://example.com/images/realmegt5pro.jpg",
            description: "Игровой флагман с Snapdragon 8 Gen 3 и зарядкой 100 Вт.",
            price: 54990
        },
        {
            title: "Nothing Phone (2)",
            image: "https://example.com/images/nothingphone2.jpg",
            description: "Смартфон с уникальным дизайном Glyph Interface и чистым Android.",
            price: 49990
        }
    ];

    // Пример использования:
    console.log(phones[0].title); // "iPhone 15 Pro Max"
    console.log(phones[0].price); // 129990
    return (
        <div className="products">
            {phones.map((item) => {
                return (<div className="card_product">
                    <div className="card_top">
                        <div className="card_image">
                            <img src={item.image} alt="" />
                        </div>

                    </div>

                    <div className="card_bottom">
                        <div className="card_title">
                            {item.title}
                        </div>

                        <div className="card_desc">
                            {item.description}
                        </div>
                        <div className="card_price">
                            1500$
                        </div>
                    </div>
                </div>)
            })}

        </div>
    )

}

export default Products