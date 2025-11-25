import { Link } from 'react-router-dom';
import './Categories.scss';

export const Categories = () => {
  const items = [
    {
      title: 'Paper books',
      text: '107 items',
      img: `${import.meta.env.BASE_URL}books/img/gif/paper.gif`,
      link: '/paper',
    },
    {
      title: 'Audiobooks',
      text: '35 items',
      img: `${import.meta.env.BASE_URL}books/img/gif/audio.gif`,
      link: '/audiobook',
    },
    {
      title: 'Kindle books',
      text: '50 items',
      img: `${import.meta.env.BASE_URL}books/img/gif/kindlebook.gif`,
      link: '/kindle',
    },
  ];

  return (
    <div className="categories">
      <h2 className="categories__title">Shop by category</h2>

      <div className="categories__grid">
        {items.map((item) => (
          <div
            className="category"
            key={item.title}
          >
            <Link to={item.link}>
              <div className="category__media">
                <img
                  className="category__media-img"
                  src={item.img}
                  alt={item.title}
                />
              </div>

              <div className="category__content">
                <h3 className="category__content-title">{item.title}</h3>
                <p className="category__content-text">{item.text}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
