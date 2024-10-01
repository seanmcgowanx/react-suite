
# React Suite

**React Suite** is a component library designed to streamline the development process by offering a collection of reusable, customizable, and responsive React components. This library provides a solid foundation for building modern and scalable React applications.

## Features

- **Reusable components**: Build your UI faster with pre-built components.
- **Customization**: Modify the appearance and behavior of components via props.
- **Responsive Design**: Components adapt to different screen sizes out of the box.
- **Modular Imports**: Import only the components you need to optimize your bundle size.
- **Built for React**: Fully compatible with modern React versions.

## Installation

You can install React Suite using npm or Yarn:

```bash
# npm
npm install react-suite

# Yarn
yarn add react-suite
```

## Usage

Here's an example of how to import and use a React Suite component in your app:

```jsx
import { Banner } from 'react-suite';

function App() {
  return (
    <div>
      <Banner status="success" header="Congratulations!"}>
        Put your custom banner message here
      </Button>
    </div>
  );
}

export default App;
```

### Available Components

- **Badges**: Customizable color, shape, and message text
- **Banners**: Customizable color, header text, and message text
- **Cards**: Customizable color, icon, title text, and hover effect
- **Testimonials**: Customizable avatar or logo, and testimonial text

## Development

### Running Locally

To run the project locally, clone the repository and install dependencies:

```bash
git clone https://github.com/seanmcgowanx/react-suite.git
cd react-suite
npm install
```

Start the development server:

```bash
npm start
```

The project will be available at \`http://localhost:3000\`.

### Running Tests

React Suite uses `Jest` for testing. To run tests, use the following command:

```bash
npm test
```

## Contributing

Contributions are welcome! 

1. Fork the repository
2. Create a new branch (\`git checkout -b feature/your-feature\`)
3. Commit your changes (\`git commit -m 'Add some feature'\`)
4. Push to the branch (\`git push origin feature/your-feature\`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Try Live Demo

Check out the live demo of **React Suite**:  
[React Suite Live Demo](https://reactt-suitee.netlify.app)
