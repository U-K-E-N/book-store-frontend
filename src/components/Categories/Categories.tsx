import './Categories.scss';

export const Categories = () => {
  const items = [
    {
      title: 'Paper books',
      text: '10,305 items',
      img: '/books/img/gif/paper.gif',
    },
    {
      title: 'Audiobooks',
      text: '10,305 items',
      img: '/books/img/gif/audio.gif',
    },
    {
      title: 'Kindle books',
      text: '10,305 items',
      img: '/books/img/gif/kindlebook.gif',
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
          </div>
        ))}
      </div>
    </div>
  );
};
