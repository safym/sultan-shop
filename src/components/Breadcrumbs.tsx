const Breadcrumbs: React.FC = () => {
  return (
    <header className="content__page-header page-header">
      <div className="page-header__container _container">
          <div className="page-header__path path">
            <a className="path__step">Главная</a>
            <span className="path__divider divider divider_size_long"></span>
            <a className="path__step path__step_state_current">Косметика и гигиена</a>
          </div>
      </div>
    </header>
  );
}

export default Breadcrumbs;