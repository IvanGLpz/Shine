const url_domain_spotify = "https://open.spotify.com";
const url_domain_ytmusic = "https://music.youtube.com/";

function removeAccents(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function normalizeText(text) {
  return removeAccents(text.replace(/\s+/g, "").toLowerCase());
}

const shineIconDark = ` 
<svg width="20" height="20" viewBox="0 0 57 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.1131 51L39.8484 20.4H45.2647L57 51H51.5837L48.8756 43.2225H36.3665L33.5294 51H28.1131ZM37.914 38.76H47.1991L42.6855 26.1375H42.4276L37.914 38.76ZM7.73756 43.35L4.1267 39.78L17.1516 26.9025C15.5181 25.1175 14.0884 23.2688 12.8624 21.3563C11.6364 19.4438 10.5729 17.425 9.67195 15.3H15.0882C15.862 16.83 16.6899 18.2112 17.572 19.4437C18.4541 20.6762 19.5176 21.9725 20.7624 23.3325C22.6538 21.2925 24.2229 19.199 25.4695 17.0519C26.7161 14.9048 27.7692 12.6208 28.629 10.2H0V5.1H18.0543V0H23.2127V5.1H41.267V10.2H33.7873C32.8846 13.2175 31.6595 16.15 30.112 18.9975C28.5645 21.845 26.6516 24.5225 24.3733 27.03L30.5633 33.2775L28.629 38.505L20.6335 30.6L7.73756 43.35Z" fill="#000000"/>
</svg>
`;

const shineIconLight = `
<svg width="25" height="25" viewBox="0 0 57 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.1131 51L39.8484 20.4H45.2647L57 51H51.5837L48.8756 43.2225H36.3665L33.5294 51H28.1131ZM37.914 38.76H47.1991L42.6855 26.1375H42.4276L37.914 38.76ZM7.73756 43.35L4.1267 39.78L17.1516 26.9025C15.5181 25.1175 14.0884 23.2688 12.8624 21.3563C11.6364 19.4438 10.5729 17.425 9.67195 15.3H15.0882C15.862 16.83 16.6899 18.2112 17.572 19.4437C18.4541 20.6762 19.5176 21.9725 20.7624 23.3325C22.6538 21.2925 24.2229 19.199 25.4695 17.0519C26.7161 14.9048 27.7692 12.6208 28.629 10.2H0V5.1H18.0543V0H23.2127V5.1H41.267V10.2H33.7873C32.8846 13.2175 31.6595 16.15 30.112 18.9975C28.5645 21.845 26.6516 24.5225 24.3733 27.03L30.5633 33.2775L28.629 38.505L20.6335 30.6L7.73756 43.35Z" fill="#ffffff"/>
</svg>
`;

const loaderHTML = `
     <span style="
      position: absolute;
      transform: translate(-50%, -50%);
      border: 2px solid black;
      border-top: 2px solid transparent;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      animation: spin 1s linear infinite;
    "></span>
`;
const listLanguages = [
  {
    label: "English",
    value: "en",
  },
  {
    label: "Spanish",
    value: "es",
  },
  {
    label: "Korean",
    value: "ko",
  },
  {
    label: "Japanese",
    value: "ja",
  },
  {
    label: "French",
    value: "fr",
  },
];

const main_container = document.createElement("div");
const toolbar_container = document.createElement("div");
const shine_title = document.createElement("h1");
const tools_container = document.createElement("div");
const language_selector = document.createElement("select");
const translate_button = document.createElement("button");
const loader_styles = document.createElement("style");

///////////  main_container

main_container.style.padding = "8px";
main_container.style.width = "100%";
main_container.style.height = "69px";
main_container.style.display = "flex";
main_container.style.justifyContent = "center";
main_container.style.alignItems = "center";
main_container.style.gap = "5px";
main_container.style.backgroundColor = "#000";
main_container.style.zIndex = "9999999999999999999999999999999999999999999";
main_container.id = "toolbartranslate";

/////////toolbar_container

toolbar_container.style.backgroundColor = "#121212";
toolbar_container.style.width = "100%";
toolbar_container.style.display = "flex";
toolbar_container.style.flexDirection = "row";
toolbar_container.style.justifyContent = "space-between";
toolbar_container.style.borderRadius = "8px";
toolbar_container.style.padding = "8px 12px";

//////////shine title

shine_title.innerHTML = `${shineIconLight} Shine`;
shine_title.style.color = "#ffffff";
shine_title.style.fontWeight = "700";
shine_title.style.display = "flex";
shine_title.style.fontSize = "1.5em";
shine_title.style.alignItems = "center";

/////////// tools_container

tools_container.style.display = "flex";
tools_container.style.justifyContent = "center";
tools_container.style.alignItems = "center";
tools_container.style.gap = "1em";

////////// language_selector

language_selector.id = "selectLanguageTranslate";
language_selector.style.width = "120px";
language_selector.style.height = "40px";
language_selector.style.padding = "0.5em";
language_selector.style.borderRadius = "4px";
language_selector.style.border = "0.2px solid #121212";
language_selector.style.backgroundColor = "#121212";
language_selector.style.color = "#ffffff";
language_selector.style.cursor = "pointer";
language_selector.style.zIndex = "9999999999999999999999999999999999999999999";

///////// translate_button

translate_button.innerHTML = shineIconDark;
translate_button.style.display = "flex";
translate_button.style.alignItems = "center";
translate_button.style.justifyContent = "center";
translate_button.style.width = "40px";
translate_button.style.height = "40px";
translate_button.style.padding = "0.5em";
translate_button.style.borderRadius = "4px";
translate_button.style.border = "1px solid black";
translate_button.style.backgroundColor = "#ffffff";
translate_button.style.cursor = "pointer";
translate_button.style.zIndex = "9999999999999999999999999999999999999999999";

////// Loader Styles

loader_styles.textContent = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

const CreateElementsShine = () => {
  document.head.appendChild(loader_styles);
  for (const iterator of listLanguages) {
    const option = document.createElement("option");
    option.value = iterator.value;
    option.textContent = iterator.label;
    language_selector.appendChild(option);
  }
  toolbar_container.appendChild(shine_title);
  tools_container.appendChild(language_selector);
  tools_container.appendChild(translate_button);
  toolbar_container.appendChild(tools_container);
  main_container.appendChild(toolbar_container);
  return main_container;
};

const endpoint = "https://lyricbackend.whil.online/test";

const endpoint_spotify = `${endpoint}/translate`;

const endpoint_ytmusic = `${endpoint}/translate/single`;

const current_url = window.location.href;

if (current_url.includes(url_domain_spotify)) {
  const handleClickTranslateLyrics = () => {
    translate_button.innerHTML = loaderHTML;

    const nowPlayingWidget = document.querySelector(
      '[data-testid="now-playing-widget"]'
    );

    const tilte_song = nowPlayingWidget.querySelectorAll(
      '[data-testid="context-item-link"]'
    );
    const authors = nowPlayingWidget.querySelectorAll(
      '[data-testid="context-item-info-artist"]'
    );

    const language = language_selector.value;
    const normalizeTitleSong = normalizeText(
      Array.from(tilte_song)?.[0]?.textContent
    );

    const normalizeAuthors = [
      ...new Set(
        Array.from(authors)?.map((item) => normalizeText(item?.textContent))
      ),
    ]?.join(",");

    const blocks_lyrics = document.querySelectorAll(
      '[data-testid="fullscreen-lyric"]'
    );

    const lyrics = Array.from(blocks_lyrics)?.map?.((item) => ({
      class: item.className,
      text: item.textContent || "--default text--",
      dataset: item?.dataset?.testid || "\n",
    }));
    const handleTranslateLyrics = async () => {
      if (!Array.from(blocks_lyrics).length) {
        translate_button.innerHTML = shineIconDark;
        alert("Please Go to Lyrics Page");
        return;
      }
      try {
        const response = await fetch(endpoint_spotify, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            lyrics,
            language,
            authors: normalizeAuthors,
            title_song: normalizeTitleSong,
          }),
        });
        const result = await response.json();

        const newlyrics = result?.lyrics;

        blocks_lyrics.forEach((element, index) => {
          element.style.fontSize = "2.3rem";
          element.textContent = element.textContent.replace(
            newlyrics?.[index]?.defautltText,
            newlyrics?.[index]?.text
          );
        });
        translate_button.innerHTML = shineIconDark;
      } catch (error) {
        translate_button.innerHTML = shineIconDark;
        alert("An error has occurred with Shine Lyrics Translator");
      }
    };
    handleTranslateLyrics();
  };
  translate_button.addEventListener("click", handleClickTranslateLyrics);
  const main_container = CreateElementsShine();
  document.body.prepend(main_container);
}

let isConfirmedToChange = false;

if (current_url.includes(url_domain_ytmusic)) {
  const ytnavbar_container = document.getElementById("right-content");

  const lyricsTagPInyect = document.createElement("p");
  lyricsTagPInyect.id = "windowWithTranslate";
  lyricsTagPInyect.textContent = "";
  lyricsTagPInyect.style.display = "flex";
  lyricsTagPInyect.style.flexDirection = "column";
  const handleClickTranslateLyrics = () => {
    translate_button.innerHTML = loaderHTML;
    const language = language_selector.value;

    const handleTranslateLyrics = async () => {
      const originalLyrics = document.querySelector(
        ".non-expandable.description.style-scope.ytmusic-description-shelf-renderer"
      );

      if (!originalLyrics?.textContent?.length) {
        translate_button.innerHTML = shineIconDark;
        alert("Please Go to Lyrics section ");
        return;
      }

      const divElement = document.querySelector(
        "div.content-info-wrapper.style-scope.ytmusic-player-bar"
      );
      const newTitle = divElement.querySelector(
        ".title.style-scope.ytmusic-player-bar"
      );
      const authors2 = divElement.querySelectorAll(
        "a.yt-simple-endpoint.style-scope.yt-formatted-string"
      );

      const normalizeTitle = normalizeText(newTitle?.textContent);

      const normalizeAuthors = Array.from(authors2)
        ?.map((item) => normalizeText(item?.textContent))
        ?.join(",");

      const LyricsCallTagPInyect = document.getElementById(
        "windowWithTranslate"
      );
      const lyricsReplaceNWithBrTag = LyricsCallTagPInyect?.innerHTML;

      const targetElement = document.querySelector(
        '[page-type="MUSIC_PAGE_TYPE_TRACK_LYRICS"]'
      );

      const lyricsElemnt = targetElement.querySelector(
        '[page-type="MUSIC_PAGE_TYPE_TRACK_LYRICS"]'
      );

      const myBody = {
        single_lyrics: `${
          lyricsReplaceNWithBrTag?.length
            ? lyricsReplaceNWithBrTag
            : originalLyrics.textContent?.replace(/\n/g, "<br>")
        }`,
        language: language,
        authors: normalizeAuthors,
        title_song: normalizeTitle,
      };

      try {
        const response = await fetch(endpoint_ytmusic, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(myBody),
        });

        const result = await response.json();

        const newlyrics = result?.single_lyrics;

        lyricsElemnt.style.position = "relative";

        lyricsTagPInyect.style.display = "flex";

        lyricsTagPInyect.style.backgroundColor = "#030303";
        lyricsTagPInyect.style.color = "white";
        lyricsTagPInyect.style.position = "absolute";
        lyricsTagPInyect.style.height = "100%";
        lyricsTagPInyect.style.top = "0";
        lyricsTagPInyect.style.fontSize = "1.6em";
        originalLyrics.style.opacity = "0";
        originalLyrics.style.userSelect = "none";

        lyricsTagPInyect.innerHTML = newlyrics;

        lyricsElemnt.appendChild(lyricsTagPInyect);
        translate_button.innerHTML = shineIconDark;
        isConfirmedToChange = true;
      } catch (error) {
        isConfirmedToChange = false;
        alert("An error has occurred with Shine Lyrics");
        translate_button.innerHTML = shineIconDark;
      }
    };
    handleTranslateLyrics();
  };

  translate_button.addEventListener("click", handleClickTranslateLyrics);

  const main_container = CreateElementsShine();
  main_container.style.backgroundColor = "transparent";
  toolbar_container.style.backgroundColor = "transparent";
  ytnavbar_container.prepend(main_container);

  const observer = new MutationObserver(() => {
    if (isConfirmedToChange) {
      const mywindow = document.getElementById("windowWithTranslate");
      mywindow.style.display = "none";
      mywindow.textContent = "";
      mywindow.style.backgroundColor = "transparent";
      const formattedStringElement = document.querySelector(
        ".non-expandable.description.style-scope.ytmusic-description-shelf-renderer"
      );
      formattedStringElement.style.opacity = "1";
    }
  });

  observer.observe(document.getElementById("main-panel"), {
    childList: true,
    subtree: true,
  });
}
