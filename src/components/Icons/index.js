
import PropTypes from 'prop-types';

export const IconUpload = ({ width = "2.4rem", height = "2.4rem", className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
    </svg>
);

IconUpload.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    className: PropTypes.string
}

export const IconSend = ({ className, width = "2.4rem", height = "2.4rem" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
        className={className}
        viewBox="0 0 16 16"
    >
        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
    </svg>

);

IconSend.propTypes = {
    className: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
}

export const IconMessage = ({ className, width = "2.4rem", height = "2.4rem" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
        className={className}
        viewBox="0 0 16 16"
    >
        <path fillRule="evenodd" d="M2.965 12.695a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2m-.8 3.108.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125M8 5.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
    </svg>
);

IconMessage.propTypes = {
    className: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
}

export const IconProfile = ({ className, width = "2.4rem", height = "2.4rem" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
        className={className}
        viewBox="0 0 16 16"
    >
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
    </svg>
);

IconProfile.propTypes = {
    className: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
}


export const IconHome = ({ className, width = "3.2rem", height = "3.2rem" }) => (
    <svg
        width={width}
        className={className}
        data-e2e=""
        height={height}
        viewBox="0 0 48 48"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path fillRule="evenodd" clipRule="evenodd" d="M23.0484 7.84003C23.6014 7.38666 24.3975 7.38666 24.9504 7.84001L41.051 21.04C41.5411 21.4418 41.7258 22.1082 41.5125 22.705C41.2991 23.3017 40.7338 23.7 40.1 23.7H37.769L36.5769 36.7278C36.4592 38.0149 35.3798 39 34.0873 39H13.9127C12.6202 39 11.5409 38.0149 11.4231 36.7278L10.231 23.7H7.89943C7.2657 23.7 6.70035 23.3017 6.487 22.705C6.27364 22.1083 6.45833 21.4418 6.9484 21.04L23.0484 7.84003ZM23.9995 10.9397L12.0948 20.7H12.969L14.369 36H22.4994V28.3138C22.4994 27.7616 22.9471 27.3138 23.4994 27.3138H24.4994C25.0517 27.3138 25.4994 27.7616 25.4994 28.3138V36H33.631L35.031 20.7H35.9045L23.9995 10.9397Z"></path>
    </svg>
);
IconHome.propTypes = {
    className: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
}

export const IconHomeActive = ({ className, width = "3.2rem", height = "3.2rem" }) => (
    <svg
        width={width}
        className={className}
        data-e2e=""
        height={height}
        viewBox="0 0 48 48"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path fillRule="evenodd" clipRule="evenodd" d="M24.9505 7.84001C24.3975 7.38666 23.6014 7.38666 23.0485 7.84003L6.94846 21.04C6.45839 21.4418 6.2737 22.1083 6.48706 22.705C6.70041 23.3017 7.26576 23.7 7.89949 23.7H10.2311L11.4232 36.7278C11.5409 38.0149 12.6203 39 13.9128 39H21.5C22.0523 39 22.5 38.5523 22.5 38V28.3153C22.5 27.763 22.9477 27.3153 23.5 27.3153H24.5C25.0523 27.3153 25.5 27.763 25.5 28.3153V38C25.5 38.5523 25.9477 39 26.5 39H34.0874C35.3798 39 36.4592 38.0149 36.577 36.7278L37.7691 23.7H40.1001C40.7338 23.7 41.2992 23.3017 41.5125 22.705C41.7259 22.1082 41.5412 21.4418 41.0511 21.04L24.9505 7.84001Z"></path>
    </svg>
)

export const IconFollowing = ({ className, width = "3.2rem", height = "3.2rem" }) => (
    <svg
        width={width}
        className={className}
        data-e2e=""
        height={height}
        viewBox="0 0 48 48"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path fillRule="evenodd" clipRule="evenodd" d="M18 12.5C15.5897 12.5 13.5849 14.5018 13.5849 17.0345C13.5849 19.5672 15.5897 21.569 18 21.569C20.4103 21.569 22.4151 19.5672 22.4151 17.0345C22.4151 14.5018 20.4103 12.5 18 12.5ZM10.5849 17.0345C10.5849 12.9017 13.8766 9.5 18 9.5C22.1234 9.5 25.4151 12.9017 25.4151 17.0345C25.4151 21.1673 22.1234 24.569 18 24.569C13.8766 24.569 10.5849 21.1673 10.5849 17.0345ZM18 29.8793C14.0801 29.8793 10.7403 32.5616 9.69697 36.2673C9.5473 36.7989 9.03833 37.1708 8.49337 37.0811L7.50662 36.9189C6.96166 36.8292 6.58837 36.3131 6.72325 35.7776C8.00732 30.6788 12.5509 26.8793 18 26.8793C23.449 26.8793 27.9927 30.6788 29.2767 35.7776C29.4116 36.3131 29.0383 36.8292 28.4934 36.9189L27.5066 37.0811C26.9617 37.1708 26.4527 36.7989 26.303 36.2673C25.2597 32.5616 21.9199 29.8793 18 29.8793Z"></path><path fillRule="evenodd" clipRule="evenodd" d="M33 31.5371C32.2445 31.5371 31.5198 31.668 30.8447 31.9093C30.3246 32.0951 29.7189 31.9243 29.4549 31.4392L28.9769 30.5608C28.713 30.0757 28.8907 29.463 29.4009 29.2516C30.513 28.791 31.7285 28.5371 33 28.5371C37.4554 28.5371 41.1594 31.6303 42.2706 35.7812C42.4135 36.3147 42.0386 36.8308 41.4935 36.9196L40.5065 37.0804C39.9614 37.1692 39.4546 36.7956 39.2894 36.2686C38.4217 33.5 35.91 31.5371 33 31.5371Z"></path><path fillRule="evenodd" clipRule="evenodd" d="M33 18.5C31.6193 18.5 30.5 19.6193 30.5 21C30.5 22.3807 31.6193 23.5 33 23.5C34.3807 23.5 35.5 22.3807 35.5 21C35.5 19.6193 34.3807 18.5 33 18.5ZM27.5 21C27.5 17.9624 29.9624 15.5 33 15.5C36.0376 15.5 38.5 17.9624 38.5 21C38.5 24.0376 36.0376 26.5 33 26.5C29.9624 26.5 27.5 24.0376 27.5 21Z"></path>
    </svg>
)

IconFollowing.propTypes = {
    className: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
}

export const IconFollowingActive = ({ className, width = "3.2rem", height = "3.2rem" }) => (
    <svg
        width={width}
        data-e2e=""
        height={height}
        className={className}
        viewBox="0 0 48 48"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M25.5 17C25.5 21.1421 22.1421 24.5 18 24.5C13.8579 24.5 10.5 21.1421 10.5 17C10.5 12.8579 13.8579 9.5 18 9.5C22.1421 9.5 25.5 12.8579 25.5 17Z"></path><path d="M7.10396 34.7906C8.78769 30.2189 12.8204 27 18.0009 27C23.1818 27 27.2107 30.2213 28.8958 34.7898C29.3075 35.906 28.6141 37 27.5 37H8.5C7.38629 37 6.69289 35.9067 7.10396 34.7906Z"></path><path d="M40.6308 37H32C31.2264 34.1633 30.0098 31.5927 28.144 29.7682C29.5384 28.9406 31.1829 28.5 33 28.5C37.239 28.5 40.536 30.8992 41.9148 35.0108C42.2516 36.0154 41.5423 37 40.6308 37Z"></path><path d="M33 26.5C36.0376 26.5 38.5 24.0376 38.5 21C38.5 17.9624 36.0376 15.5 33 15.5C29.9624 15.5 27.5 17.9624 27.5 21C27.5 24.0376 29.9624 26.5 33 26.5Z"></path>
    </svg>
)

IconFollowingActive.propTypes = {
    className: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
}

export const IconLive = ({ className, width = "3.2rem", height = "3.2rem" }) => (
    <svg
        width={width}
        height={height}
        className={className}
        viewBox="0 0 32 32"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path fillRule="evenodd" clipRule="evenodd" d="M7.78511 10.3334C6.95518 10.3334 6.33301 10.9792 6.33301 11.7143V20.2858C6.33301 21.0209 6.95518 21.6667 7.78511 21.6667H18.5744C19.4043 21.6667 20.0265 21.0209 20.0265 20.2858V17.5602C20.0265 17.1826 20.2392 16.8372 20.5763 16.6672C20.9135 16.4973 21.3177 16.5317 21.6212 16.7563L25.6663 19.7488V12.2513L21.6212 15.2439C21.3177 15.4684 20.9135 15.5029 20.5763 15.3329C20.2392 15.1629 20.0265 14.8175 20.0265 14.4399V11.7143C20.0265 10.9792 19.4043 10.3334 18.5744 10.3334H7.78511ZM25.6855 12.2371C25.6831 12.2388 25.6839 12.2383 25.6839 12.2383L25.6855 12.2371ZM25.6716 12.2177C25.673 12.2212 25.6746 12.2243 25.6763 12.2269C25.6798 12.2324 25.6834 12.2355 25.6855 12.2371L25.6874 12.2383C25.6874 12.2383 25.6865 12.238 25.6839 12.2383M4.33301 11.7143C4.33301 9.81952 5.90653 8.33337 7.78511 8.33337H18.5744C20.453 8.33337 22.0265 9.81953 22.0265 11.7143V12.4562L24.4963 10.629C25.0929 10.1877 25.8879 10.1155 26.5542 10.4359C27.224 10.758 27.6663 11.4325 27.6663 12.1905V19.8096C27.6663 20.5676 27.224 21.2421 26.5542 21.5642C25.888 21.8846 25.0929 21.8124 24.4963 21.371L22.0265 19.5439V20.2858C22.0265 22.1806 20.453 23.6667 18.5744 23.6667H7.78511C5.90653 23.6667 4.33301 22.1806 4.33301 20.2858V11.7143Z"></path><path d="M15 15.134C15.6667 15.5189 15.6667 16.4811 15 16.866L12 18.5981C11.3333 18.983 10.5 18.5019 10.5 17.7321L10.5 14.2679C10.5 13.4981 11.3333 13.017 12 13.4019L15 15.134Z"></path>
    </svg>
)

IconLive.propTypes = {
    className: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
}

export const IconLiveActive = ({ className, width = "3.2rem", height = "3.2rem" }) => (
    <svg
        width={width}
        data-e2e=""
        className={className}
        height={height}
        viewBox="0 0 48 48"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M6.5 17.5714C6.5 14.7292 8.86029 12.5 11.6782 12.5H27.8621C30.6799 12.5 33.0402 14.7292 33.0402 17.5714V18.6843L36.745 15.9435C37.6399 15.2815 38.8324 15.1731 39.8318 15.6537C40.8365 16.1369 41.5 17.1486 41.5 18.2857V29.7143C41.5 30.8514 40.8365 31.8631 39.8318 32.3463C38.8324 32.8269 37.6399 32.7185 36.745 32.0565L33.0402 29.3158V30.4286C33.0402 33.2708 30.6799 35.5 27.8621 35.5H11.6782C8.86029 35.5 6.5 33.2708 6.5 30.4286V17.5714Z"></path><path d="M23.25 23.134C23.9167 23.5189 23.9167 24.4811 23.25 24.866L17.25 28.3301C16.5833 28.715 15.75 28.2339 15.75 27.4641L15.75 20.5359C15.75 19.7661 16.5833 19.285 17.25 19.6699L23.25 23.134Z" fill="currentColor"></path>
    </svg>
)

IconLiveActive.propTypes = {
    className: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
}

export const IconUploadPage = ({ className, width = "1.6rem", height = "1.6rem" }) => (
    <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        role="img"
        focusable="false"
        data-icon="plus-bold"
        aria-hidden="true"
        fill="currentColor"
        will-change="auto"
        transform="rotate(0)"
        className={className}
    >
        <path fillRule="evenodd" clipRule="evenodd" d="M12 3.75c.69 0 1.25.56 1.25 1.25v5.75H19a1.25 1.25 0 1 1 0 2.5h-5.75V19a1.25 1.25 0 1 1-2.5 0v-5.75H5a1.25 1.25 0 1 1 0-2.5h5.75V5c0-.69.56-1.25 1.25-1.25"></path>
    </svg>
)

IconUploadPage.prototype = {
    classNames: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
}


export const IconComment = ({ className, width = "1.6rem", height = "1.6rem" }) => (
    <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        role="img"
        focusable="false"
        data-icon="comments"
        aria-hidden="true"
        fill="currentColor"
        will-change="auto"
        transform="rotate(0)"
        className={className}
    >
        <path d="M4 11c0-3.427 3.403-6.5 8-6.5s8 3.073 8 6.5c0 2.148-1.072 4.037-2.595 5.619-1.049 1.089-2.275 1.992-3.405 2.683V17.5h-2c-4.597 0-8-3.073-8-6.5m8-8.5C6.655 2.5 2 6.143 2 11s4.655 8.5 10 8.5V21a1 1 0 0 0 1.447.894c1.565-.782 3.67-2.093 5.398-3.888C20.572 16.213 22 13.852 22 11c0-4.857-4.656-8.5-10-8.5m-3 8.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m4.25 0a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m3 1.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"></path>
    </svg>
)

IconComment.prototype = {
    classNames: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
}


export const IconPost = ({ className, width = "1.6rem", height = "1.6rem" }) => (
    <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        role="img"
        focusable="false"
        data-icon="folder"
        aria-hidden="true"
        fill="currentColor"
        will-change="auto"
        transform="rotate(0)"
        className={className}
    >
        <path d="M5.998 3a3 3 0 0 0-3 3v11a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V8a1 1 0 0 0-1-1h-5c-.755 0-.998-.245-1.594-1.438C12.501 3.755 11.744 3 9.998 3zm0 2h4c.755 0 .998.245 1.594 1.438.13.261.184.344.312.562H7.967a1 1 0 0 0 0 2h11.031v8a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1m4 8a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z"></path>
    </svg>
)

IconPost.prototype = {
    classNames: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
}

// chua xong
export const IconData = ({ className, width = "1.6rem", height = "1.6rem" }) => (
    <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        className={className}
        role="img"
        focusable="false"
        data-icon="chart-rise"
        aria-hidden="true"
        fill="currentColor"
        will-change="auto"
        transform="rotate(0)"
    >
        <path d="M16 11.414V14h2V9.01A1.01 1.01 0 0 0 16.99 8H12v2h2.586l-1.854 1.854a.5.5 0 0 1-.353.146h-2.353a2.5 2.5 0 0 0-1.562.548l-2.089 1.671a1 1 0 0 0 1.25 1.562l2.089-1.671a.5.5 0 0 1 .312-.11h2.353a2.5 2.5 0 0 0 1.768-.732z"></path><path fillRule="evenodd" clipRule="evenodd" d="M7.759 4h8.482c.805 0 1.47 0 2.01.044.563.046 1.08.145 1.565.392a4 4 0 0 1 1.748 1.748c.247.485.346 1.002.392 1.564C22 8.29 22 8.954 22 9.758v4.483c0 .805 0 1.47-.044 2.01-.046.563-.145 1.08-.392 1.565a4 4 0 0 1-1.748 1.748c-.485.247-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H7.758c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 0 1-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C2 15.71 2 15.046 2 14.242V9.758c0-.805 0-1.47.044-2.01.046-.563.145-1.08.392-1.565a4 4 0 0 1 1.748-1.748c.485-.247 1.002-.346 1.564-.392C6.29 4 6.954 4 7.758 4M5.91 6.038c-.438.035-.663.1-.819.18a2 2 0 0 0-.874.874c-.08.156-.145.38-.18.819C4 8.361 4 8.943 4 9.8v4.4c0 .857 0 1.439.038 1.889.035.438.1.663.18.819a2 2 0 0 0 .874.874c.156.08.38.145.819.18C6.361 18 6.943 18 7.8 18h8.4c.857 0 1.439 0 1.889-.038.438-.035.663-.1.819-.18a2 2 0 0 0 .874-.874c.08-.156.145-.38.18-.819.037-.45.038-1.032.038-1.889V9.8c0-.857 0-1.439-.038-1.889-.035-.438-.1-.663-.18-.819a2 2 0 0 0-.874-.874c-.156-.08-.38-.145-.819-.18C17.639 6 17.057 6 16.2 6H7.8c-.857 0-1.439 0-1.889.038"></path>
    </svg>
)

IconData.prototype = {
    classNames: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
}

export const IconLightbulb = ({ className, width = "1.6rem", height = "1.6rem" }) => (
    <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        className={className}
        role="img"
        focusable="false"
        data-icon="lightbulb"
        aria-hidden="true"
        fill="currentColor"
        will-change="auto"
        transform="rotate(0)"
    >
        <path d="M11.997 2a7 7 0 0 0-7 7c0 1.959.545 3.126 1.75 4.531l.312.375c.711.829.938 1.281.938 2.094v2a4 4 0 0 0 8 0v-2c0-.813.227-1.265.938-2.094.05-.058.256-.309.312-.375 1.205-1.405 1.75-2.572 1.75-4.531a7 7 0 0 0-7-7m0 2a5 5 0 0 1 5 5c0 1.416-.33 2.145-1.25 3.219-.052.06-.29.312-.344.375-.713.832-1.128 1.58-1.309 2.412-1.268 0-2.929.005-4.197.005-.18-.833-.593-1.585-1.306-2.417-.054-.063-.292-.315-.344-.375-.92-1.074-1.25-1.803-1.25-3.219a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 1 1 0 0 0 2 0 1 1 0 0 1 1-1 1 1 0 0 0 0-2m-2 11h4v1a2 2 0 1 1-4 0z"></path>
    </svg>
)

IconLightbulb.prototype = {
    classNames: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
}

export const IconBook = ({ className, width = "1.6rem", height = "1.6rem" }) => (
    <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}

        className={className}
        role="img"
        focusable="false"
        data-icon="book"
        aria-hidden="true"
        fill="currentColor"
        will-change="auto"
        transform="rotate(0)"
    >
        <path d="M10.3 6.675 9.505 8.37l-1.781.27c-.245.036-.294.212-.117.393l1.289 1.328-.305 1.843c-.042.256.11.367.328.246l1.594-.885 1.57.885c.218.121.37.01.328-.246l-.305-1.843 1.289-1.328c.178-.18.128-.356-.117-.393l-1.781-.27-.797-1.696c-.108-.233-.29-.233-.398 0"></path><path fillRule="evenodd" clipRule="evenodd" d="M7 2a4 4 0 0 0-4 4v12.5A3.5 3.5 0 0 0 6.5 22h13.49A1.01 1.01 0 0 0 21 20.99V7.01A1.01 1.01 0 0 0 19.99 6H18V3.01A1.01 1.01 0 0 0 16.99 2zm-.5 18a1.5 1.5 0 0 1 0-3h10.49A1.01 1.01 0 0 0 18 15.99V8h1v12zm9.5-5H6.5c-.537 0-1.045.12-1.5.337V6a2 2 0 0 1 2-2h9z"></path>
    </svg>
)

IconBook.prototype = {
    classNames: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
}

export const IconMusic = ({ className, width = "1.6rem", height = "1.6rem" }) => (
    <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        className={className}
        role="img"
        focusable="false"
        data-icon="music"
        aria-hidden="true"
        fill="currentColor"
        will-change="auto"
        transform="rotate(0)"
    >
        <path d="m17.841 2.014-6 1c-.482.08-.844.51-.844 1l-.01 10.528a3.83 3.83 0 0 0-1.99-.528 4 4 0 1 0 4 4l.013-9.162 5.137-.87c.114-.018.374-.101.6-.343a.85.85 0 0 0 .25-.625v-4c0-.618-.547-1.102-1.156-1m-.859 2.17.005 1.973-3.99.669.004-1.983zm-7.985 11.83a2 2 0 1 1 .001 3.999 2 2 0 0 1 0-4"></path>
    </svg>
)

IconMusic.prototype = {
    classNames: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
}

export const IconMail = ({ className, width = "1.6rem", height = "1.6rem" }) => (
    <svg viewBox=
        "0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        className={className}
        role="img"
        focusable="false"
        data-icon="envelope"
        aria-hidden="true"
        fill="currentColor"
        will-change="auto"
        transform="rotate(0)"
    >
        <path d="M6 3.998a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-8a4 4 0 0 0-4-4zm0 2h12c1.008 0 1.841.74 1.979 1.71-.958.893-2.382 1.989-3.323 2.665-2.165 1.555-4.07 2.625-4.656 2.625s-2.491-1.07-4.656-2.625a42 42 0 0 1-2.563-2 13 13 0 0 1-.687-.625c.138-.97.898-1.75 1.906-1.75m-1.99 4.354c2.538 2.053 6.257 4.634 7.99 4.646 1.129.008 3.06-1.07 5.03-2.431 1.019-.705 2.153-1.542 2.971-2.23L20 15.998a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></path>
    </svg>
)

IconMail.prototype = {
    classNames: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
}


export const IconBack = ({ className, width = "1.6rem", height = "1.6rem" }) => (
    <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        className={className}
        role="img"
        focusable="false"
        data-icon="arrow-left"
        aria-hidden="true"
        fill="currentColor"
        will-change="auto"
        transform="rotate(0)"
    >
        <path fillRule="evenodd" clipRule="evenodd" d="M15.16 5.25a1 1 0 0 1 .09 1.41L10.554 12l4.698 5.34a1 1 0 1 1-1.502 1.32l-4.788-5.442a1.84 1.84 0 0 1 0-2.436l4.788-5.443a1 1 0 0 1 1.412-.09"></path>
    </svg>
)

IconBack.prototype = {
    classNames: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
}

export const IconVideo = ({ className, width = "2rem", height = "2.4rem" }) => (
    <svg
        width={width}
        height={height}
        className={className}
        viewBox="0 0 20 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"

    >
        <path d="M4.99935 3.67969C3.15852 3.67969 1.66602 5.17134 1.66602 7.01134C1.66602 8.01967 2.10017 8.91221 2.8085 9.52304C2.10017 10.1339 1.66602 10.9997 1.66602 12.008V15.3397C1.66602 17.1789 3.15852 18.6797 4.99935 18.6797H10.8318C12.5635 18.6797 14.0027 17.3647 14.166 15.6772L16.8993 18.4364C17.4243 18.9614 18.3318 18.5797 18.3318 17.838V9.50966C18.3318 9.13883 18.101 8.84887 17.811 8.72887C17.521 8.60887 17.1618 8.64883 16.8993 8.9105C16.551 9.25883 15.2785 10.5838 14.1593 11.703C14.0535 10.6163 13.4527 9.6855 12.5568 9.158C13.061 8.57467 13.3318 7.84217 13.3318 7.01134C13.3318 5.17134 11.8393 3.67969 9.99851 3.67969C8.99018 3.67969 8.11018 4.14305 7.49935 4.85054C6.88768 4.14305 6.00768 3.67969 4.99935 3.67969ZM4.99935 5.34554C5.91935 5.34554 6.66602 6.09134 6.66602 7.01134C6.66602 7.93051 5.91935 8.67633 4.99935 8.67633C4.07852 8.67633 3.33268 7.93134 3.33268 7.01134C3.33268 6.09134 4.07852 5.34554 4.99935 5.34554ZM9.99851 5.34554C10.9193 5.34554 11.6652 6.09134 11.6652 7.01134C11.6652 7.93051 10.9193 8.67633 9.99851 8.67633C9.07851 8.67633 8.33268 7.93134 8.33268 7.01134C8.33268 6.09134 9.07851 5.34554 9.99851 5.34554Z" fill="black" />
    </svg>

)

IconVideo.prototype = {
    classNames: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
}


export const IconLight = ({ className, width = "2rem", height = "2.4rem" }) => (
    <svg
        width={width}
        height={height}
        className={className}
        viewBox="0 0 20 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"

    >
        <path d="M9.9974 3.62891C6.77573 3.62891 4.16406 6.24057 4.16406 9.46224C4.16406 10.4939 4.44239 11.4764 4.94572 12.3531C4.95489 12.3697 6.52406 14.8356 6.66406 15.2956H13.3307C13.4682 14.8381 15.0324 12.3897 15.0232 12.4047C15.5424 11.5189 15.8307 10.5106 15.8307 9.46224C15.8307 6.24057 13.2191 3.62891 9.9974 3.62891ZM9.9974 6.96224C10.4574 6.96224 10.8307 7.33557 10.8307 7.79557C10.8307 8.25557 10.4574 8.62891 9.9974 8.62891C9.5374 8.62891 9.16406 9.00224 9.16406 9.46224C9.16406 9.92224 8.79073 10.2956 8.33073 10.2956C7.87073 10.2956 7.4974 9.92224 7.4974 9.46224C7.4974 8.08141 8.61656 6.96224 9.9974 6.96224ZM6.66406 16.9622C6.66406 18.8031 8.15656 20.2956 9.9974 20.2956C11.8382 20.2956 13.3307 18.8031 13.3307 16.9622H6.66406Z" fill="black" />
    </svg>


)

IconLight.prototype = {
    classNames: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
}

export const IconFps = ({ className, width = "2rem", height = "2.4rem" }) => (
    <svg width={width} height={height} className={className} viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.875 4C1.83947 4 1 4.85626 1 5.9125V17.3875C1 18.4437 1.83947 19.3 2.875 19.3H17.125C18.1605 19.3 19 18.4437 19 17.3875V5.9125C19 4.85626 18.1605 4 17.125 4H2.875Z" fill="black" />
        <path d="M5.27249 13.6516C4.97965 13.6516 4.78366 13.4429 4.78366 13.1196V10.8391H4.76521L4.41242 11.1089C4.32941 11.1725 4.27638 11.1929 4.18414 11.1929C4.00198 11.1929 3.86133 11.0427 3.86133 10.8289C3.86133 10.6788 3.91667 10.5566 4.04579 10.4599L4.64992 10.0145C4.84361 9.87192 5.01193 9.85156 5.20101 9.85156C5.5538 9.85156 5.76133 10.0857 5.76133 10.4548V13.1196C5.76133 13.4429 5.56533 13.6516 5.27249 13.6516Z" fill="white" />
        <path d="M7.9471 13.6516C7.07289 13.6516 6.521 12.9335 6.521 11.7441C6.521 10.5472 7.07952 9.85156 7.9471 9.85156C8.81468 9.85156 9.371 10.5447 9.371 11.7416C9.371 12.9285 8.82131 13.6516 7.9471 13.6516ZM7.9471 12.8387C8.23409 12.8387 8.41732 12.4971 8.41732 11.7441C8.41732 10.9886 8.23409 10.6644 7.9471 10.6644C7.66011 10.6644 7.47468 10.9886 7.47468 11.7441C7.47468 12.4971 7.66011 12.8387 7.9471 12.8387Z" fill="white" />
        <path d="M11.5548 13.6516C10.7061 13.6516 10.1309 13.2224 10.1309 12.5762C10.1309 12.0772 10.4725 11.7478 10.931 11.6655V11.6455C10.532 11.5582 10.2455 11.2488 10.2455 10.8446C10.2455 10.2682 10.7745 9.85156 11.5548 9.85156C12.335 9.85156 12.864 10.2682 12.864 10.8471C12.864 11.2438 12.5775 11.5582 12.1829 11.6455V11.6655C12.6414 11.7478 12.9809 12.0797 12.9809 12.5787C12.9809 13.2224 12.399 13.6516 11.5548 13.6516ZM11.5548 11.3586C11.7796 11.3586 11.9427 11.1939 11.9427 10.9544C11.9427 10.7149 11.7774 10.5527 11.5548 10.5527C11.3321 10.5527 11.169 10.7149 11.169 10.9544C11.169 11.1939 11.3299 11.3586 11.5548 11.3586ZM11.5548 12.948C11.8171 12.948 11.9934 12.7583 11.9934 12.4988C11.9934 12.2443 11.8171 12.0597 11.5548 12.0597C11.2925 12.0597 11.1161 12.2443 11.1161 12.4988C11.1161 12.7583 11.2925 12.948 11.5548 12.948Z" fill="white" />
        <path d="M15.1668 13.6516C14.2926 13.6516 13.7407 12.9335 13.7407 11.7441C13.7407 10.5472 14.2992 9.85156 15.1668 9.85156C16.0344 9.85156 16.5907 10.5447 16.5907 11.7416C16.5907 12.9285 16.041 13.6516 15.1668 13.6516ZM15.1668 12.8387C15.4538 12.8387 15.637 12.4971 15.637 11.7441C15.637 10.9886 15.4538 10.6644 15.1668 10.6644C14.8798 10.6644 14.6944 10.9886 14.6944 11.7441C14.6944 12.4971 14.8798 12.8387 15.1668 12.8387Z" fill="white" />
    </svg>
)

IconFps.prototype = {
    classNames: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
}

export const IconFile = ({ className, width = "2rem", height = "2.4rem" }) => (
    <svg width={width} height={height} className={className} viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.99805 4.49219C3.6173 4.49219 2.49805 5.61135 2.49805 6.99219V8.65885V16.1589C2.49805 17.9997 3.99046 19.4922 5.83138 19.4922H14.1647C16.0056 19.4922 17.498 17.9997 17.498 16.1589V8.65885C17.498 8.19885 17.125 7.82552 16.6647 7.82552C16.6647 7.82552 14.2457 7.82552 12.498 7.82552C11.8691 7.82552 11.6668 7.62135 11.1699 6.62718C10.4168 5.12135 9.7858 4.49219 8.33138 4.49219H4.99805ZM4.99805 6.15885H8.33138C8.9603 6.15885 9.16263 6.36302 9.65954 7.35719C9.76829 7.57469 9.81338 7.64385 9.91988 7.82552C7.0483 7.82552 4.98555 7.82552 4.16471 7.82552V6.99219C4.16471 6.53219 4.5378 6.15885 4.99805 6.15885ZM8.33138 12.8255H11.6647C12.125 12.8255 12.498 13.1989 12.498 13.6589C12.498 14.1189 12.125 14.4922 11.6647 14.4922H8.33138C7.87113 14.4922 7.49805 14.1189 7.49805 13.6589C7.49805 13.1989 7.87113 12.8255 8.33138 12.8255Z" fill="black" />
    </svg>

)

IconFile.prototype = {
    classNames: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
}

export const IconCapCut = ({ className, width = "1rem", height = "1rem" }) => (
    <svg
        fill="currentColor"
        fontSize="16"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        className={className}
    >
        <path d="M41.7 15.66v-5.41L35 13.67v-.2C35 11.3 33.41 10 31.11 10H9.89C7.47 10 6 11.3 6 13.46v5.47l9.37 4.72L6 28.4v5.46C6 36 7.47 37.3 9.9 37.3h21.2c2.3 0 3.9-1.3 3.9-3.42v-.28l6.7 3.46v-5.5l-15.57-7.9 15.56-7.99ZM20.72 26.34l11.5 5.86H9.19l11.55-5.86Zm11.42-11.25-11.42 5.83-11.55-5.83h22.97Z"></path>
    </svg>

)

IconCapCut.prototype = {
    classNames: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
}

export const IconWaring = ({ className, width = "1rem", height = "1rem" }) => (
    <svg
        fill="currentColor"
        className={className}
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
    >
        <path opacity="0.9" d="M18.46 9.6c1.82-3.15 2.73-4.72 3.91-5.25a4 4 0 0 1 3.26 0c1.18.53 2.1 2.1 3.91 5.25l13.17 22.8c1.82 3.15 2.72 4.73 2.59 6.02a4 4 0 0 1-1.63 2.82c-1.05.76-2.87.76-6.5.76H10.83c-3.64 0-5.46 0-6.51-.76a4 4 0 0 1-1.63-2.82c-.13-1.3.78-2.87 2.6-6.02L18.45 9.6Zm7.33 8.26c0-.56 0-.84-.11-1.05a1 1 0 0 0-.44-.44c-.21-.1-.5-.1-1.05-.1h-.39c-.56 0-.84 0-1.05.1a1 1 0 0 0-.44.44c-.1.21-.1.5-.1 1.05v9.21c0 .56 0 .84.1 1.06a1 1 0 0 0 .44.43c.21.11.5.11 1.05.11h.39c.56 0 .84 0 1.05-.1a1 1 0 0 0 .44-.44c.1-.22.1-.5.1-1.06v-9.2Zm-3.47 17.6c.44.46 1 .68 1.68.68a2.28 2.28 0 0 0 2.35-2.32A2.28 2.28 0 0 0 24 31.46a2.28 2.28 0 0 0-2.36 2.36c0 .65.23 1.2.68 1.65Z"></path>
    </svg>

)

IconWaring.prototype = {
    classNames: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
}







