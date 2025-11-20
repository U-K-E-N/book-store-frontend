export const Categories = () => {
  const items = [
    {
      title: 'Paper books',
      text: '10,305 items',
      video: '/books/img/categories/paper.mp4',
    },
    {
      title: 'Audiobooks',
      text: '10,305 items',
      video: '/books/img/categories/audio.mp4',
    },
    {
      title: 'Kindle books',
      text: '10,305 items',
      video: '/books/img/categories/kindlebook.mp4',
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
              <video
                src={item.video}
                autoPlay
                loop
                muted
                playsInline
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
