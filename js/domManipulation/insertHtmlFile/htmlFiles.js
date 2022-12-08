export const movieNavHtml = `<!DOCTYPE html>
<button class=\"moive_nav__left\" id=\"moive_nav__left\">
  <img src=\"./img/left_arrow.svg\" />
</button>
<button class=\"moive_nav__right\" id=\"moive_nav__right\">
  <img src=\"./img/right_arrow.svg\" />
</button>
<div class=\"movie_nav__card_container\" id=\"movie_nav__card_container\"></div>'`

export const movieFormHtml = `
<!DOCTYPE html>
<form class="form__container" id="form__container">
  <img class="form_play_img" src="./img/play.svg" alt="Play Icon" />
  <h2 class="form__h2">Add Movie To Database</h2>
  <!--............................................-->
  <div class="form_input__container">
    <input
      type="text"
      class="form_input__text"
      name="title"
      placeholder="Title"
      required="required"
    />
  </div>
  <!--............................................-->
  <!--............................................-->
  <div class="form__small_wrapper">
    <div class="form_input__container_small">
      <input
        type="number"
        class="form_input__number"
        name="year"
        placeholder="Year"
        required="required"
        min="1801"
        max="3000"
      />
    </div>
    <!--............................................-->
    <div class="form_input__container_small">
      <input
        type="number"
        class="form_input__number"
        name="rating"
        placeholder="Rating"
        required="required"
        min="1"
        max="10"
      />
    </div>
    <!--............................................-->
    <div class="form_input__container_small">
      <input
        type="number"
        class="form_input__number"
        name="runtime"
        placeholder="Run Time"
        required="required"
        min="1"
        max="999"
      />
    </div>
  </div>
  <!--............................................-->
  <!--............................................-->
  <div class="form_input__container">
    <textarea
      type="text"
      class="form_input__textarea"
      name="plot"
      placeholder="Plot"
      required="required"
    ></textarea>
  </div>
  <!--............................................-->
  <div class="form_input__container">
    <input
      type="text"
      class="form_input__text"
      name="cast"
      placeholder="Cast "
      required="required"
    />
    <div class="form_input__note">Separate each actor with a comma</div>
  </div>
  <!--............................................-->
  <div class="form_input__container">
    <input
      type="file"
      id="form__image_upload"
      accept="image/jpeg, image/png, image/jpg"
      class="form_input__text"
      name="image"
      placeholder="Upload Image"
      required="required"
    />
  </div>
  <!--............................................-->
  <input class="form__submit_button" type="submit" value="Submit" />
</form>`

export const homePageHtml = `<!DOCTYPE html>
<section class="homepage_text" id="homepage_text">
  <article class="homepage_text__flexbox" id="homepage_text__flexbox">
    <div class="homepage_text__header_div">
      <h1 class="homepage_text__h1">
        MOVIE PREVIEWS FOR <span class="homepage_text__h1_span">YOU</span>
      </h1>
      <h2 class="homepage_text__h2">
        Use the menu to browse the latest movies...
      </h2>
    </div>
  </article>
</section>`

export const homeBgImageHtml = `<!DOCTYPE html>
<img
  class="home__bg_img"
  id="home__bg_img"
  src="./img/movie_bg8.png"
  alt="movie clapper board and light"
/>
`

export const headerHtml = `<!DOCTYPE html>
<!--............................................-->
<a class="header_logo_container" href="/"
  ><img
    class="header__logo"
    src="./img/movie_databse_logo6.svg"
    alt="Movie Database Logo"
  />
</a>
<!--............................................-->
<!--............................................-->
<nav class="nav__flexbox">
  <!--............................................-->
  <!--............................................-->
  <button class="nav__buttton_container" id="nav__buttton_container__add_moive">
    <img
      class="nav__button_icon"
      src="./img/add.svg"
      alt="Add Movie To Database"
    />
    <div class="nav__button_text_wrapper">
      <p class="nav__button_text">Add Movie</p>
    </div>
  </button>
  <!--............................................-->
  <button
    class="nav__buttton_container"
    id="nav__buttton_container__toggle_movie_browser"
  >
    <img
      class="nav__button_icon"
      id="nav__button_icon__hide"
      src="./img/hide.svg"
      alt="Toggle Movie Browser"
    />
    <div class="nav__button_text_wrapper">
      <p
        class="nav__button_text hide"
        id="nav__button_text__hide_movie_browser"
      >
        Hide Movie Browser
      </p>
    </div>
  </button>
  <!--............................................-->
  <button
    class="nav__buttton_container"
    id="nav__buttton_container__sort_movies_dropdown"
  >
    <img
      class="nav__button_icon"
      src="./img/sort.svg"
      alt="Toggle Movie Browser"
    />
    <div class="nav__button_text_wrapper">
      <p class="nav__button_text hide" id="nav__button_text__sort_moives">
        Sort Moives
      </p>
    </div>
    <div
      class="nav__button_text__dropdown_container_HIDE"
      id="nav__button_text__dropdown_container"
    >
      <p
        class="nav__button_text__dropdown"
        id="nav__button_text__dropdown_year"
      >
        By Year
      </p>
      <p
        class="nav__button_text__dropdown"
        id="nav__button_text__dropdown_title"
      >
        By Title
      </p>
      <p
        class="nav__button_text__dropdown"
        id="nav__button_text__dropdown_rating"
      >
        By Rating
      </p>
    </div>
    <img
      class="nav_sort_pulldown_arrow"
      id="nav_sort_pulldown_arrow"
      src="./img/down.svg"
    />
  </button>
  <!--............................................-->
  <!--............................................-->
</nav>
`
