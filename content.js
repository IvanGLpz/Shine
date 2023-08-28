const urlDomainSpotify = 'https://open.spotify.com'

const urlDomainYouTube = "https://music.youtube.com/"

const urlMain = "https://lyricbackend.whil.online"

const currentUrl = window.location.url



const iconTranslateSVG = ` 
<svg width="20" height="20" viewBox="0 0 57 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.1131 51L39.8484 20.4H45.2647L57 51H51.5837L48.8756 43.2225H36.3665L33.5294 51H28.1131ZM37.914 38.76H47.1991L42.6855 26.1375H42.4276L37.914 38.76ZM7.73756 43.35L4.1267 39.78L17.1516 26.9025C15.5181 25.1175 14.0884 23.2688 12.8624 21.3563C11.6364 19.4438 10.5729 17.425 9.67195 15.3H15.0882C15.862 16.83 16.6899 18.2112 17.572 19.4437C18.4541 20.6762 19.5176 21.9725 20.7624 23.3325C22.6538 21.2925 24.2229 19.199 25.4695 17.0519C26.7161 14.9048 27.7692 12.6208 28.629 10.2H0V5.1H18.0543V0H23.2127V5.1H41.267V10.2H33.7873C32.8846 13.2175 31.6595 16.15 30.112 18.9975C28.5645 21.845 26.6516 24.5225 24.3733 27.03L30.5633 33.2775L28.629 38.505L20.6335 30.6L7.73756 43.35Z" fill="#000000"/>
</svg>

`
const iconTranslateBlackSVG = ` 
<svg width="25" height="25" viewBox="0 0 57 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.1131 51L39.8484 20.4H45.2647L57 51H51.5837L48.8756 43.2225H36.3665L33.5294 51H28.1131ZM37.914 38.76H47.1991L42.6855 26.1375H42.4276L37.914 38.76ZM7.73756 43.35L4.1267 39.78L17.1516 26.9025C15.5181 25.1175 14.0884 23.2688 12.8624 21.3563C11.6364 19.4438 10.5729 17.425 9.67195 15.3H15.0882C15.862 16.83 16.6899 18.2112 17.572 19.4437C18.4541 20.6762 19.5176 21.9725 20.7624 23.3325C22.6538 21.2925 24.2229 19.199 25.4695 17.0519C26.7161 14.9048 27.7692 12.6208 28.629 10.2H0V5.1H18.0543V0H23.2127V5.1H41.267V10.2H33.7873C32.8846 13.2175 31.6595 16.15 30.112 18.9975C28.5645 21.845 26.6516 24.5225 24.3733 27.03L30.5633 33.2775L28.629 38.505L20.6335 30.6L7.73756 43.35Z" fill="#ffffff"/>
</svg>
`
const mainContainer = document.createElement("div")
const toolbarContainer = document.createElement('div')
const selectLanguage = document.createElement('select')
const buttonTranslate = document.createElement('button')
const containerTools = document.createElement("div")
const titleNode = document.createElement("h1")

const styleElement = document.createElement('style');

styleElement.textContent = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

const loader = `
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
    `

const listLanguages = [
  {
    label: 'English',
    value: 'en',
  },
  {
    label: 'Spanish',
    value: 'es',
  },
  {
    label: 'Korean',
    value: 'ko',
  },
  {
    label: 'Japanese',
    value: 'ja',
  },
  {
    label: 'French',
    value: 'fr',
  },
]
mainContainer.style.padding = "8px"
mainContainer.style.width = '100%'
mainContainer.style.height = '69px'
mainContainer.style.display = 'flex'
mainContainer.style.justifyContent = 'center'
mainContainer.style.alignItems = 'center'
mainContainer.style.gap = '5px'
mainContainer.style.backgroundColor = '#000'
mainContainer.style.zIndex = '9999999999999999999999999999999999999999999'
mainContainer.id = 'toolbartranslate'



///toolbar

toolbarContainer.style.backgroundColor = "#121212"
toolbarContainer.style.width = "100%"
toolbarContainer.style.display = "flex"
toolbarContainer.style.flexDirection = "row"
toolbarContainer.style.justifyContent = "space-between"
toolbarContainer.style.borderRadius = "8px"
toolbarContainer.style.padding = "8px 12px"
///TITLE

titleNode.innerHTML = `${iconTranslateBlackSVG} Shine`
titleNode.style.color = "#ffffff"
titleNode.style.fontWeight = "700"
titleNode.style.display = "flex"
titleNode.style.fontSize = "1.5em"
titleNode.style.alignItems = "center"
///CONTAINER


containerTools.style.display = "flex"
containerTools.style.justifyContent = "center"
containerTools.style.alignItems = "center"
containerTools.style.gap = "1em"
////SelectorLanguage
selectLanguage.id = 'selectLanguageTranslate'
selectLanguage.style.width = '120px'
selectLanguage.style.height = '40px'
selectLanguage.style.padding = '0.5em'
selectLanguage.style.borderRadius = '4px'
selectLanguage.style.border = '0.2px solid #121212'
selectLanguage.style.backgroundColor = '#121212'
selectLanguage.style.color = '#ffffff'
selectLanguage.style.cursor = 'pointer'
selectLanguage.style.zIndex = '9999999999999999999999999999999999999999999'

///ButtonTranslate

buttonTranslate.innerHTML = iconTranslateSVG
buttonTranslate.style.display = "flex"
buttonTranslate.style.alignItems = "center"
buttonTranslate.style.justifyContent = "center"
buttonTranslate.style.width = '40px'
buttonTranslate.style.height = '40px'
buttonTranslate.style.padding = '0.5em'
buttonTranslate.style.borderRadius = '4px'
buttonTranslate.style.border = '1px solid black'
buttonTranslate.style.backgroundColor = '#ffffff'
buttonTranslate.style.cursor = 'pointer'
buttonTranslate.style.zIndex = '9999999999999999999999999999999999999999999'

//ValidateIfIsCorrectDomain

document.head.appendChild(styleElement)


if (window.location.href.includes(urlDomainSpotify)) {
  for (const iterator of listLanguages) {
    const option = document.createElement('option')
    option.value = iterator.value
    option.textContent = iterator.label
    selectLanguage.appendChild(option)
  }
  //inyect toolbar

  const handleClickLyrics = () => {
    buttonTranslate.innerHTML = loader
    const blocks = document.querySelectorAll('[data-testid="fullscreen-lyric"]')
    const language = document.getElementById('selectLanguageTranslate').value

    const dataArray = Array.from(blocks).map((item) => ({
      class: item.className,
      text: item.textContent || '--default text--',
      dataset: item?.dataset?.testid || '\n',
    }))

    const postLyrics = async () => {
      try {
        const url = 'https://lyricbackend.whil.online/translate'
        const data = {
          lyrics: dataArray,
          language: language,
        }
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })

        const result = await response.json()

        const newlyrics = result?.lyrics

        blocks.forEach((element, index) => {
          element.style.fontSize = "2.3rem"
          element.textContent = element.textContent.replace(
            newlyrics?.[index]?.defautltText,
            newlyrics?.[index]?.text
          )
        })
        buttonTranslate.innerHTML = iconTranslateSVG
      } catch (error) {
        alert("An error has occurred with Shine")
      }
    }
    postLyrics()
  }

  buttonTranslate.addEventListener('click', handleClickLyrics)
  toolbarContainer.appendChild(titleNode)
  containerTools.appendChild(selectLanguage)
  containerTools.appendChild(buttonTranslate)
  toolbarContainer.appendChild(containerTools)
  mainContainer.appendChild(toolbarContainer)
  document.body.prepend(mainContainer)
}




////YOU TUBE MUSIC


const containerNavbarYouTube = document.getElementById("right-content")
const newText = document.createElement("p")

const contents = document.getElementById("contents")


if (window.location.href.includes(urlDomainYouTube)) {

  for (const iterator of listLanguages) {
    const option = document.createElement('option')
    option.value = iterator.value
    option.textContent = iterator.label
    selectLanguage.appendChild(option)
  }

  const handleClickLyrics = () => {

    buttonTranslate.innerHTML = loader
    const language = document.getElementById('selectLanguageTranslate').value

    const formattedStringElement = document.querySelector('.non-expandable.description.style-scope.ytmusic-description-shelf-renderer');

    const postLyrics = async () => {
      try {
        const url = `${urlMain}/translate/single`
        const data = {
          single_lyrics: `${formattedStringElement.textContent}`,
          language: language,
        }
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })

        const result = await response.json()

        const newlyrics = result?.single_lyrics
        formattedStringElement.textContent = newlyrics
        buttonTranslate.innerHTML = iconTranslateSVG

      } catch (error) {
        alert("An error has occurred with Shine")
      }
    }
    postLyrics()
  }

  buttonTranslate.addEventListener('click', handleClickLyrics)
  toolbarContainer.appendChild(titleNode)
  containerTools.appendChild(selectLanguage)
  containerTools.appendChild(buttonTranslate)
  toolbarContainer.appendChild(containerTools)
  mainContainer.style.backgroundColor = "transparent"
  toolbarContainer.style.backgroundColor = "transparent"
  mainContainer.appendChild(toolbarContainer)
  containerNavbarYouTube.prepend(mainContainer)
}


