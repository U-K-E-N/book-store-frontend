import './AboutPage.scss';

export const AboutPage = () => {
  return (
    <div className="about-layout">
      <div className="static-left">
        <h2>About Us</h2>

        <p>
          This project is a modern single-page application (SPA) built for a
          fictional online bookstore. It is fully developed on the frontend
          using React.
        </p>

        <p>
          The application includes catalog browsing, category filtering, dynamic
          search, product pages, pagination, and interactive UI elements.
          Navigation across the app is handled with React Router, while Swiper
          is used to build smooth and responsive sliders for book previews and
          featured collections.
        </p>

        <p>
          The goal of this project is to showcase a clean architecture, reusable
          components, responsive layout, and user-friendly interactions —
          providing a realistic simulation of a fully functional online
          bookstore interface.
        </p>

        <p>
          Every part of the UI was designed with attention to detail to ensure a
          simple, fast and visually pleasant browsing experience for users.
        </p>
      </div>

      <div className="star-wars-background">
        <div className="crawl-container">
          <div className="crawl">
            <p>This project was made by:</p>
            <p>Yuliia Kulish</p>
            <p> Evhen Savin</p>
            <p>Anastasiia Serkhovets</p>
            <p>Karen Behlarian</p>
          </div>
        </div>
      </div>
    </div>
  );
};
