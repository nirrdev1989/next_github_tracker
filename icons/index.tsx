import { FiUsers } from "react-icons/fi";
import { AiOutlineUser, AiFillMinusCircle, AiOutlineSearch, AiTwotoneStar, AiOutlineIssuesClose, AiOutlineUnorderedList, AiFillGithub, AiOutlineMail, AiOutlineInfoCircle, AiOutlineFork, AiOutlinePullRequest } from "react-icons/ai"
import { MdDateRange } from "react-icons/md";
import { RiUserFollowLine, RiMoonClearLine, RiCloseLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosCodeWorking } from "react-icons/io";
import { BsCalendar4Event, BsTwitter, BsCardList, BsCodeSlash, BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from "react-icons/bs";
import { ImSun } from "react-icons/im";
import { FcPlus } from "react-icons/fc";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiRepost } from "react-icons/bi";


export const GithubIcon = <i style={{ color: "var(--main-dark-color)" }} className="devicon-github-original colored"></i>
export const TwitterIcon = <i className="devicon-twitter-original colored"></i>

export const RepoIcon = <BiRepost />
export const RightArrowIcon = <BsFillArrowRightSquareFill />
export const LeftArrowIcon = <BsFillArrowLeftSquareFill />
export const CloseIcon = <RiCloseLine />
export const HamburgerIcon = <GiHamburgerMenu />
export const UserIcon = <AiOutlineUser />
export const EventIcon = <BsCalendar4Event />
export const MinusIcon = <AiFillMinusCircle color="var(--main-red-color)" />
export const PlusGreenIcon = <FcPlus />
export const SearchIcon = <AiOutlineSearch />
export const StarIcon = <AiTwotoneStar />
export const CodeIcon = <BsCodeSlash />
export const UsersIcon = <FiUsers />
export const ListIcon = <AiOutlineUnorderedList />
export const DateIcon = <MdDateRange />
export const FollowIcon = <RiUserFollowLine />
export const LocationIcon = <IoLocationOutline />
export const EmailIcon = <AiOutlineMail />
export const ListCardIcon = <BsCardList />
export const InfoIcon = <AiOutlineInfoCircle />
export const WorkIcon = <IoIosCodeWorking />
export const PullRequestIcon = <AiOutlinePullRequest />
export const ForkIcon = <AiOutlineFork />
export const IssueIcon = <AiOutlineIssuesClose />
export const SunIcon = <ImSun />
export const MoonIcon = <RiMoonClearLine />

export const languageIcons = {
   Swift: <svg viewBox="0 0 128 128">
      <path fill="#f05138" d="M126.33 34.06a39.32 39.32 0 00-.79-7.83 28.78 28.78 0 00-2.65-7.58 28.84 28.84 0 00-4.76-6.32 23.42 23.42 0 00-6.62-4.55 27.27 27.27 0 00-7.68-2.53c-2.65-.51-5.56-.51-8.21-.76H30.25a45.46 45.46 0 00-6.09.51 21.82 21.82 0 00-5.82 1.52c-.53.25-1.32.51-1.85.76a33.82 33.82 0 00-5 3.28c-.53.51-1.06.76-1.59 1.26a22.41 22.41 0 00-4.76 6.32 23.61 23.61 0 00-2.65 7.58 78.5 78.5 0 00-.79 7.83v60.39a39.32 39.32 0 00.79 7.83 28.78 28.78 0 002.65 7.58 28.84 28.84 0 004.76 6.32 23.42 23.42 0 006.62 4.55 27.27 27.27 0 007.68 2.53c2.65.51 5.56.51 8.21.76h63.22a45.08 45.08 0 008.21-.76 27.27 27.27 0 007.68-2.53 30.13 30.13 0 006.62-4.55 22.41 22.41 0 004.76-6.32 23.61 23.61 0 002.65-7.58 78.49 78.49 0 00.79-7.83V34.06z"></path><path fill="#fefefe" d="M85 96.5c-11.11 6.13-26.38 6.76-41.75.47A64.53 64.53 0 0113.84 73a50 50 0 0010.85 6.32c15.87 7.1 31.73 6.61 42.9 0-15.9-11.66-29.4-26.82-39.46-39.2a43.47 43.47 0 01-5.29-6.82c12.16 10.61 31.5 24 38.38 27.79a271.77 271.77 0 01-27-32.34 266.8 266.8 0 0044.47 34.87c.71.38 1.26.7 1.7 1a32.7 32.7 0 001.21-3.51c3.71-12.89-.53-27.54-9.79-39.67C93.25 33.81 106 57.05 100.66 76.51c-.14.53-.29 1-.45 1.55l.19.22c10.59 12.63 7.68 26 6.35 23.5C101 91 90.37 94.33 85 96.5z"></path>
   </svg>,
   TypeScript: <svg viewBox="0 0 128 128">
      <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path><path data-name="original" fill="#007acc" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"></path>
   </svg>,
   Java: <svg viewBox="0 0 128 128">
      <path fill="#0074BD" d="M52.581 67.817s-3.284 1.911 2.341 2.557c6.814.778 10.297.666 17.805-.753 0 0 1.979 1.237 4.735 2.309-16.836 7.213-38.104-.418-24.881-4.113zm-2.059-9.415s-3.684 2.729 1.945 3.311c7.28.751 13.027.813 22.979-1.103 0 0 1.373 1.396 3.536 2.157-20.352 5.954-43.021.469-28.46-4.365z"></path><path fill="#EA2D2E" d="M67.865 42.431c4.151 4.778-1.088 9.074-1.088 9.074s10.533-5.437 5.696-12.248c-4.519-6.349-7.982-9.502 10.771-20.378.001 0-29.438 7.35-15.379 23.552z"></path><path fill="#0074BD" d="M90.132 74.781s2.432 2.005-2.678 3.555c-9.716 2.943-40.444 3.831-48.979.117-3.066-1.335 2.687-3.187 4.496-3.576 1.887-.409 2.965-.334 2.965-.334-3.412-2.403-22.055 4.719-9.469 6.762 34.324 5.563 62.567-2.506 53.665-6.524zm-35.97-26.134s-15.629 3.713-5.534 5.063c4.264.57 12.758.439 20.676-.225 6.469-.543 12.961-1.704 12.961-1.704s-2.279.978-3.93 2.104c-15.874 4.175-46.533 2.23-37.706-2.038 7.463-3.611 13.533-3.2 13.533-3.2zM82.2 64.317c16.135-8.382 8.674-16.438 3.467-15.353-1.273.266-1.845.496-1.845.496s.475-.744 1.378-1.063c10.302-3.62 18.223 10.681-3.322 16.345 0 0 .247-.224.322-.425z"></path><path fill="#EA2D2E" d="M72.474 1.313s8.935 8.939-8.476 22.682c-13.962 11.027-3.184 17.313-.006 24.498-8.15-7.354-14.128-13.828-10.118-19.852 5.889-8.842 22.204-13.131 18.6-27.328z"></path><path fill="#0074BD" d="M55.749 87.039c15.484.99 39.269-.551 39.832-7.878 0 0-1.082 2.777-12.799 4.981-13.218 2.488-29.523 2.199-39.191.603 0 0 1.98 1.64 12.158 2.294z"></path><path fill="#EA2D2E" d="M94.866 100.181h-.472v-.264h1.27v.264h-.47v1.317h-.329l.001-1.317zm2.535.066h-.006l-.468 1.251h-.216l-.465-1.251h-.005v1.251h-.312v-1.581h.457l.431 1.119.432-1.119h.454v1.581h-.302v-1.251zm-44.19 14.79c-1.46 1.266-3.004 1.978-4.391 1.978-1.974 0-3.045-1.186-3.045-3.085 0-2.055 1.146-3.56 5.738-3.56h1.697v4.667h.001zm4.031 4.548v-14.077c0-3.599-2.053-5.973-6.997-5.973-2.886 0-5.416.714-7.473 1.622l.592 2.493c1.62-.595 3.715-1.147 5.771-1.147 2.85 0 4.075 1.147 4.075 3.521v1.779h-1.424c-6.921 0-10.044 2.685-10.044 6.723 0 3.479 2.058 5.456 5.933 5.456 2.49 0 4.351-1.028 6.088-2.533l.316 2.137h3.163v-.001zm13.452 0h-5.027l-6.051-19.689h4.391l3.756 12.099.835 3.635c1.896-5.258 3.24-10.596 3.912-15.733h4.271c-1.143 6.481-3.203 13.598-6.087 19.688zm19.288-4.548c-1.465 1.266-3.01 1.978-4.392 1.978-1.976 0-3.046-1.186-3.046-3.085 0-2.055 1.149-3.56 5.736-3.56h1.701v4.667h.001zm4.033 4.548v-14.077c0-3.599-2.059-5.973-6.999-5.973-2.889 0-5.418.714-7.475 1.622l.593 2.493c1.62-.595 3.718-1.147 5.774-1.147 2.846 0 4.074 1.147 4.074 3.521v1.779h-1.424c-6.923 0-10.045 2.685-10.045 6.723 0 3.479 2.056 5.456 5.93 5.456 2.491 0 4.349-1.028 6.091-2.533l.318 2.137h3.163v-.001zm-56.693 3.346c-1.147 1.679-3.005 3.008-5.037 3.757l-1.989-2.345c1.547-.794 2.872-2.075 3.489-3.269.532-1.063.753-2.43.753-5.701V92.891h4.284v22.173c0 4.375-.348 6.144-1.5 7.867z"></path>
   </svg>,
   CSS:
      <svg viewBox="0 0 128 128">
         <path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"></path><path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"></path><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"></path><path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"></path><path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"></path><path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"></path>
      </svg>
   ,
   HTML: <svg viewBox="0 0 128 128">
      <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"></path><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"></path><path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"></path><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"></path>
   </svg>,
   Ruby: <svg viewBox="0 0 128 128">
      <linearGradient id="ruby-original-a" gradientUnits="userSpaceOnUse" x1="157.08" y1="2382.05" x2="131.682" y2="2426.892" gradientTransform="matrix(1 0 0 -1 -47.5 2517)"><stop offset="0" stopColor="#FB7655"></stop><stop offset="0" stopColor="#FB7655"></stop><stop offset=".41" stopColor="#E42B1E"></stop><stop offset=".99" stopColor="#900"></stop><stop offset="1" stopColor="#900"></stop></linearGradient><path fill="url(#ruby-original-a)" d="M97.078 83.214L28.34 124.031l89.003-6.04 6.855-89.745z"></path><linearGradient id="ruby-original-b" gradientUnits="userSpaceOnUse" x1="169.731" y1="2419.72" x2="136.998" y2="2441.685" gradientTransform="matrix(1 0 0 -1 -47.5 2517)"><stop offset="0" stopColor="#871101"></stop><stop offset="0" stopColor="#871101"></stop><stop offset=".99" stopColor="#911209"></stop><stop offset="1" stopColor="#911209"></stop></linearGradient><path fill="url(#ruby-original-b)" d="M117.488 117.93l-7.649-52.799-20.837 27.514z"></path><linearGradient id="ruby-original-c" gradientUnits="userSpaceOnUse" x1="143.542" y1="2380.69" x2="110.81" y2="2402.655" gradientTransform="matrix(1 0 0 -1 -47.5 2517)"><stop offset="0" stopColor="#871101"></stop><stop offset="0" stopColor="#871101"></stop><stop offset=".99" stopColor="#911209"></stop><stop offset="1" stopColor="#911209"></stop></linearGradient><path fill="url(#ruby-original-c)" d="M117.592 117.93l-56.044-4.399-32.91 10.385z"></path><linearGradient id="ruby-original-d" gradientUnits="userSpaceOnUse" x1="74.817" y1="2435.622" x2="79.891" y2="2402.644" gradientTransform="matrix(1 0 0 -1 -47.5 2517)"><stop offset="0" stopColor="#fff"></stop><stop offset="0" stopColor="#fff"></stop><stop offset=".23" stopColor="#E57252"></stop><stop offset=".46" stopColor="#DE3B20"></stop><stop offset=".99" stopColor="#A60003"></stop><stop offset="1" stopColor="#A60003"></stop></linearGradient><path fill="url(#ruby-original-d)" d="M28.717 123.928l14.001-45.867-30.81 6.588z"></path><linearGradient id="ruby-original-e" gradientUnits="userSpaceOnUse" x1="109.719" y1="2466.413" x2="111.589" y2="2432.757" gradientTransform="matrix(1 0 0 -1 -47.5 2517)"><stop offset="0" stopColor="#fff"></stop><stop offset="0" stopColor="#fff"></stop><stop offset=".23" stopColor="#E4714E"></stop><stop offset=".56" stopColor="#BE1A0D"></stop><stop offset=".99" stopColor="#A80D00"></stop><stop offset="1" stopColor="#A80D00"></stop></linearGradient><path fill="url(#ruby-original-e)" d="M88.996 92.797l-12.882-50.46-36.866 34.558z"></path><linearGradient id="ruby-original-f" gradientUnits="userSpaceOnUse" x1="140.691" y1="2497.523" x2="146.289" y2="2473.401" gradientTransform="matrix(1 0 0 -1 -47.5 2517)"><stop offset="0" stopColor="#fff"></stop><stop offset="0" stopColor="#fff"></stop><stop offset=".18" stopColor="#E46342"></stop><stop offset=".4" stopColor="#C82410"></stop><stop offset=".99" stopColor="#A80D00"></stop><stop offset="1" stopColor="#A80D00"></stop></linearGradient><path fill="url(#ruby-original-f)" d="M121.275 43.047L86.426 14.585l-9.704 31.373z"></path><linearGradient id="ruby-original-g" gradientUnits="userSpaceOnUse" x1="123.6" y1="2506.018" x2="147.719" y2="2518.077" gradientTransform="matrix(1 0 0 -1 -47.5 2517)"><stop offset="0" stopColor="#fff"></stop><stop offset="0" stopColor="#fff"></stop><stop offset=".54" stopColor="#C81F11"></stop><stop offset=".99" stopColor="#BF0905"></stop><stop offset="1" stopColor="#BF0905"></stop></linearGradient><path fill="url(#ruby-original-g)" d="M104.978 4.437L84.481 15.764 71.551 4.285z"></path><linearGradient id="ruby-original-h" gradientUnits="userSpaceOnUse" x1="53.674" y1="2444.028" x2="55.66" y2="2424.153" gradientTransform="matrix(1 0 0 -1 -47.5 2517)"><stop offset="0" stopColor="#fff"></stop><stop offset="0" stopColor="#fff"></stop><stop offset=".31" stopColor="#DE4024"></stop><stop offset=".99" stopColor="#BF190B"></stop><stop offset="1" stopColor="#BF190B"></stop></linearGradient><path fill="url(#ruby-original-h)" d="M3.802 100.034l8.586-15.659L5.442 65.72z"></path><path fill="#fff" d="M4.981 65.131l6.987 19.821 30.365-6.812L77 45.922l9.783-31.075L71.38 3.969l-26.19 9.802c-8.252 7.675-24.263 22.86-24.84 23.146-.573.291-10.575 19.195-15.369 28.214z"></path><linearGradient id="ruby-original-i" gradientUnits="userSpaceOnUse" x1="40.026" y1="2418.781" x2="133.345" y2="2514.739" gradientTransform="matrix(1 0 0 -1 -47.5 2517)"><stop offset="0" stopColor="#BD0012"></stop><stop offset="0" stopColor="#BD0012"></stop><stop offset=".07" stopColor="#fff"></stop><stop offset=".17" stopColor="#fff"></stop><stop offset=".27" stopColor="#C82F1C"></stop><stop offset=".33" stopColor="#820C01"></stop><stop offset=".46" stopColor="#A31601"></stop><stop offset=".72" stopColor="#B31301"></stop><stop offset=".99" stopColor="#E82609"></stop><stop offset="1" stopColor="#E82609"></stop></linearGradient><path fill="url(#ruby-original-i)" d="M29.519 29.521c17.882-17.73 40.937-28.207 49.785-19.28 8.843 8.926-.534 30.62-18.418 48.345-17.884 17.725-40.653 28.779-49.493 19.852-8.849-8.92.242-31.191 18.126-48.917z"></path><linearGradient id="ruby-original-j" gradientUnits="userSpaceOnUse" x1="111.507" y1="2409.102" x2="83.398" y2="2416.039" gradientTransform="matrix(1 0 0 -1 -47.5 2517)"><stop offset="0" stopColor="#8C0C01"></stop><stop offset="0" stopColor="#8C0C01"></stop><stop offset=".54" stopColor="#990C00"></stop><stop offset=".99" stopColor="#A80D0E"></stop><stop offset="1" stopColor="#A80D0E"></stop></linearGradient><path fill="url(#ruby-original-j)" d="M28.717 123.909l13.89-46.012 46.135 14.82c-16.68 15.642-35.233 28.865-60.025 31.192z"></path><linearGradient id="ruby-original-k" gradientUnits="userSpaceOnUse" x1="159.785" y1="2442.837" x2="134.814" y2="2465.217" gradientTransform="matrix(1 0 0 -1 -47.5 2517)"><stop offset="0" stopColor="#7E110B"></stop><stop offset="0" stopColor="#7E110B"></stop><stop offset=".99" stopColor="#9E0C00"></stop><stop offset="1" stopColor="#9E0C00"></stop></linearGradient><path fill="url(#ruby-original-k)" d="M77.062 45.831l11.844 46.911c13.934-14.65 26.439-30.401 32.563-49.883l-44.407 2.972z"></path><linearGradient id="ruby-original-l" gradientUnits="userSpaceOnUse" x1="168.959" y1="2483.901" x2="156.521" y2="2497.199" gradientTransform="matrix(1 0 0 -1 -47.5 2517)"><stop offset="0" stopColor="#79130D"></stop><stop offset="0" stopColor="#79130D"></stop><stop offset=".99" stopColor="#9E120B"></stop><stop offset="1" stopColor="#9E120B"></stop></linearGradient><path fill="url(#ruby-original-l)" d="M121.348 43.097c4.74-14.305 5.833-34.825-16.517-38.635l-18.339 10.13 34.856 28.505z"></path><path fill="#9E1209" d="M3.802 99.828c.656 23.608 17.689 23.959 24.945 24.167l-16.759-39.14-8.186 14.973z"></path><radialGradient id="ruby-original-m" cx="138.703" cy="2464.789" r="30.601" gradientTransform="matrix(1 0 0 -1 -47.5 2517)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#A80D00"></stop><stop offset="0" stopColor="#A80D00"></stop><stop offset=".99" stopColor="#7E0E08"></stop><stop offset="1" stopColor="#7E0E08"></stop></radialGradient><path fill="url(#ruby-original-m)" d="M77.128 45.904c10.708 6.581 32.286 19.798 32.723 20.041.68.383 9.304-14.542 11.261-22.976l-43.984 2.935z"></path><radialGradient id="ruby-original-n" cx="96.325" cy="2424.465" r="40.679" gradientTransform="matrix(1 0 0 -1 -47.5 2517)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#A30C00"></stop><stop offset="0" stopColor="#A30C00"></stop><stop offset=".99" stopColor="#800E08"></stop><stop offset="1" stopColor="#800E08"></stop></radialGradient><path fill="url(#ruby-original-n)" d="M42.589 77.897l18.57 35.828c10.98-5.955 19.579-13.211 27.454-20.983L42.589 77.897z"></path><linearGradient id="ruby-original-o" gradientUnits="userSpaceOnUse" x1="67.509" y1="2393.115" x2="57.373" y2="2427.506" gradientTransform="matrix(1 0 0 -1 -47.5 2517)"><stop offset="0" stopColor="#8B2114"></stop><stop offset="0" stopColor="#8B2114"></stop><stop offset=".43" stopColor="#9E100A"></stop><stop offset=".99" stopColor="#B3100C"></stop><stop offset="1" stopColor="#B3100C"></stop></linearGradient><path fill="url(#ruby-original-o)" d="M11.914 84.904l-2.631 31.331c4.964 6.781 11.794 7.371 18.96 6.842-5.184-12.9-15.538-38.696-16.329-38.173z"></path><linearGradient id="ruby-original-p" gradientUnits="userSpaceOnUse" x1="145.272" y1="2507.076" x2="167.996" y2="2497.045" gradientTransform="matrix(1 0 0 -1 -47.5 2517)"><stop offset="0" stopColor="#B31000"></stop><stop offset="0" stopColor="#B31000"></stop><stop offset=".44" stopColor="#910F08"></stop><stop offset=".99" stopColor="#791C12"></stop><stop offset="1" stopColor="#791C12"></stop></linearGradient><path fill="url(#ruby-original-p)" d="M86.384 14.67l36.891 5.177c-1.969-8.343-8.015-13.727-18.32-15.41L86.384 14.67z"></path>
   </svg>
   ,
   JavaScript: <svg viewBox="0 0 128 128">
      <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>
   </svg>,
   Python: <svg viewBox="0 0 128 128">
      <linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stopColor="#5A9FD4"></stop><stop offset="1" stopColor="#306998"></stop></linearGradient><linearGradient id="python-original-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stopColor="#FFD43B"></stop><stop offset="1" stopColor="#FFE873"></stop></linearGradient><path fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)"></path><path fill="url(#python-original-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10.26)"></path><radialGradient id="python-original-c" cx="1825.678" cy="444.45" r="26.743" gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#B8B8B8" stopOpacity=".498"></stop><stop offset="1" stopColor="#7F7F7F" stopOpacity="0"></stop></radialGradient><path opacity=".444" fill="url(#python-original-c)" d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"></path>
   </svg>,
   PHP: <svg viewBox="0 0 128 128">
      <path fill="#6181B6" d="M64 33.039C30.26 33.039 2.906 46.901 2.906 64S30.26 94.961 64 94.961 125.094 81.099 125.094 64 97.74 33.039 64 33.039zM48.103 70.032c-1.458 1.364-3.077 1.927-4.86 2.507-1.783.581-4.052.461-6.811.461h-6.253l-1.733 10h-7.301l6.515-34H41.7c4.224 0 7.305 1.215 9.242 3.432 1.937 2.217 2.519 5.364 1.747 9.337-.319 1.637-.856 3.159-1.614 4.515a15.118 15.118 0 01-2.972 3.748zM69.414 73l2.881-14.42c.328-1.688.208-2.942-.361-3.555-.57-.614-1.782-1.025-3.635-1.025h-5.79l-3.731 19h-7.244l6.515-33h7.244l-1.732 9h6.453c4.061 0 6.861.815 8.402 2.231s2.003 3.356 1.387 6.528L76.772 73h-7.358zm40.259-11.178c-.318 1.637-.856 3.133-1.613 4.488-.758 1.357-1.748 2.598-2.971 3.722-1.458 1.364-3.078 1.927-4.86 2.507-1.782.581-4.053.461-6.812.461h-6.253l-1.732 10h-7.301l6.514-34h14.041c4.224 0 7.305 1.215 9.241 3.432 1.935 2.217 2.518 5.418 1.746 9.39zM95.919 54h-5.001l-2.727 14h4.442c2.942 0 5.136-.29 6.576-1.4 1.442-1.108 2.413-2.828 2.918-5.421.484-2.491.264-4.434-.66-5.458-.925-1.024-2.774-1.721-5.548-1.721zm-56.985 0h-5.002l-2.727 14h4.441c2.943 0 5.136-.29 6.577-1.4 1.441-1.108 2.413-2.828 2.917-5.421.484-2.491.264-4.434-.66-5.458S41.708 54 38.934 54z"></path>
   </svg>,
   Rust: <i className="devicon-rust-plain colored"></i>,
   "C++": <svg viewBox="0 0 128 128">
      <path fill="#D26383" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"></path><path fill="#9C033A" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"></path><path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"></path><path d="M82.1 61.8h5.2v-5.3h4.4v5.3H97v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4zm18.5 0h5.2v-5.3h4.4v5.3h5.3v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4z" fill="#fff"></path>
   </svg>,
   Go: <svg viewBox="0 0 128 128">
      <g fill="#00acd7" fillRule="evenodd"><path d="M11.156 54.829c-.243 0-.303-.122-.182-.303l1.273-1.637c.12-.182.424-.303.666-.303H34.55c.243 0 .303.182.182.364l-1.03 1.576c-.121.181-.424.363-.606.363zM2.004 60.404c-.242 0-.303-.12-.182-.303l1.273-1.636c.121-.182.424-.303.667-.303h27.636c.242 0 .364.182.303.364l-.485 1.454c-.06.243-.303.364-.545.364zM16.67 65.98c-.242 0-.302-.182-.181-.364l.848-1.515c.122-.182.364-.363.607-.363h12.12c.243 0 .364.181.364.424l-.12 1.454c0 .243-.243.425-.425.425zM79.58 53.738c-3.819.97-6.425 1.697-10.182 2.666-.91.243-.97.303-1.758-.606-.909-1.03-1.576-1.697-2.848-2.303-3.819-1.878-7.516-1.333-10.97.91-4.121 2.666-6.242 6.605-6.182 11.514.06 4.849 3.394 8.849 8.182 9.516 4.121.545 7.576-.91 10.303-4 .545-.667 1.03-1.394 1.636-2.243H56.064c-1.272 0-1.575-.788-1.151-1.818.788-1.879 2.242-5.03 3.09-6.606.183-.364.607-.97 1.516-.97h22.06c-.12 1.637-.12 3.273-.363 4.91-.667 4.363-2.303 8.363-4.97 11.878-4.364 5.758-10.06 9.333-17.273 10.303-5.939.788-11.454-.364-16.302-4-4.485-3.394-7.03-7.879-7.697-13.454-.788-6.606 1.151-12.546 5.151-17.758 4.303-5.636 10-9.212 16.97-10.485 5.697-1.03 11.151-.363 16.06 2.97 3.212 2.121 5.515 5.03 7.03 8.545.364.546.122.849-.606 1.03z"></path><path d="M99.64 87.253c-5.515-.122-10.546-1.697-14.788-5.334-3.576-3.09-5.818-7.03-6.545-11.697-1.091-6.848.787-12.909 4.909-18.302 4.424-5.819 9.757-8.849 16.97-10.122 6.181-1.09 12-.484 17.272 3.091 4.788 3.273 7.757 7.697 8.545 13.515 1.03 8.182-1.333 14.849-6.97 20.546-4 4.06-8.909 6.606-14.545 7.757-1.636.303-3.273.364-4.848.546zm14.424-24.485c-.06-.788-.06-1.394-.182-2-1.09-6-6.606-9.394-12.363-8.06-5.637 1.272-9.273 4.848-10.606 10.545-1.091 4.727 1.212 9.515 5.575 11.454 3.334 1.455 6.667 1.273 9.879-.363 4.788-2.485 7.394-6.364 7.697-11.576z" fillRule="nonzero"></path></g>
   </svg>,
   C: <svg viewBox="0 0 128 128">
      <path fill="#659AD3" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"></path><path fill="#03599C" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"></path><path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"></path>
   </svg>,
   "C#": <svg viewBox="0 0 128 128">
      <path fill="#9B4F96" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"></path><path fill="#68217A" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"></path><path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM97 66.2l.9-4.3h-4.2v-4.7h5.1L100 51h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7H97zm4.8 0h3.8l.9-4.3h-3.8l-.9 4.3z"></path>
   </svg>,
   "Objectivec-C": <i className="devicon-objectivec-plain colored"></i>,
   Shell: <i className="devicon-selenium-original colored"></i>,
   // GO: <i class="devicon-go-original-wordmark"></i>


}

















