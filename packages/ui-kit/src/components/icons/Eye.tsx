import { SvgContainer, SvgProps } from "./SvgContainer";

export const Eye = (props: SvgProps) => (
  <SvgContainer size={24} fill='none' {...props}>
    <path
      d='M2 12L1.34438 11.6358L1.14203 12L1.34438 12.3642L2 12ZM22 12L22.6556 12.3642L22.858 12L22.6556 11.6358L22 12ZM2 12C2.65562 12.3642 2.65548 12.3645 2.65535 12.3647C2.65533 12.3648 2.65521 12.365 2.65516 12.365C2.65506 12.3652 2.65501 12.3653 2.65501 12.3653C2.65501 12.3653 2.6552 12.365 2.6556 12.3643C2.65639 12.3629 2.65798 12.3601 2.66037 12.3559C2.66515 12.3476 2.67312 12.3338 2.68428 12.315C2.7066 12.2773 2.74165 12.2194 2.78941 12.1442C2.88498 11.9937 3.03112 11.7743 3.22767 11.5089C3.62151 10.9772 4.21352 10.2669 5.00172 9.55747C6.57889 8.13802 8.90793 6.75 12 6.75V5.25C8.4254 5.25 5.75444 6.86198 3.99828 8.44253C3.11982 9.23314 2.46183 10.0228 2.02233 10.6161C1.80222 10.9132 1.63585 11.1626 1.52309 11.3402C1.46668 11.429 1.42361 11.5 1.39384 11.5503C1.37896 11.5754 1.3674 11.5953 1.35916 11.6097C1.35504 11.6169 1.35175 11.6227 1.34928 11.627C1.34805 11.6292 1.34703 11.631 1.34621 11.6325C1.3458 11.6332 1.34545 11.6339 1.34514 11.6344C1.34499 11.6347 1.3448 11.635 1.34472 11.6352C1.34455 11.6355 1.34438 11.6358 2 12ZM12 6.75C15.0921 6.75 17.4211 8.13802 18.9983 9.55747C19.7865 10.2669 20.3785 10.9772 20.7723 11.5089C20.9689 11.7743 21.115 11.9937 21.2106 12.1442C21.2583 12.2194 21.2934 12.2773 21.3157 12.315C21.3269 12.3338 21.3348 12.3476 21.3396 12.3559C21.342 12.3601 21.3436 12.3629 21.3444 12.3643C21.3448 12.365 21.345 12.3653 21.345 12.3653C21.345 12.3653 21.3449 12.3652 21.3448 12.365C21.3448 12.365 21.3447 12.3648 21.3446 12.3647C21.3445 12.3645 21.3444 12.3642 22 12C22.6556 11.6358 22.6555 11.6355 22.6553 11.6352C22.6552 11.635 22.655 11.6347 22.6549 11.6344C22.6546 11.6339 22.6542 11.6332 22.6538 11.6325C22.653 11.631 22.6519 11.6292 22.6507 11.627C22.6483 11.6227 22.645 11.6169 22.6408 11.6097C22.6326 11.5953 22.621 11.5754 22.6062 11.5503C22.5764 11.5 22.5333 11.429 22.4769 11.3402C22.3641 11.1626 22.1978 10.9132 21.9777 10.6161C21.5382 10.0228 20.8802 9.23314 20.0017 8.44253C18.2456 6.86198 15.5746 5.25 12 5.25V6.75ZM22 12C21.3444 11.6358 21.3445 11.6355 21.3446 11.6353C21.3447 11.6352 21.3448 11.635 21.3448 11.635C21.3449 11.6348 21.345 11.6347 21.345 11.6347C21.345 11.6347 21.3448 11.635 21.3444 11.6357C21.3436 11.6371 21.342 11.6399 21.3396 11.6441C21.3348 11.6524 21.3269 11.6662 21.3157 11.685C21.2934 11.7227 21.2583 11.7806 21.2106 11.8558C21.115 12.0063 20.9689 12.2257 20.7723 12.4911C20.3785 13.0228 19.7865 13.7331 18.9983 14.4425C17.4211 15.862 15.0921 17.25 12 17.25V18.75C15.5746 18.75 18.2456 17.138 20.0017 15.5575C20.8802 14.7669 21.5382 13.9772 21.9777 13.3839C22.1978 13.0868 22.3641 12.8374 22.4769 12.6598C22.5333 12.571 22.5764 12.5 22.6062 12.4497C22.621 12.4246 22.6326 12.4047 22.6408 12.3903C22.645 12.3831 22.6483 12.3773 22.6507 12.373C22.6519 12.3708 22.653 12.369 22.6538 12.3675C22.6542 12.3668 22.6546 12.3661 22.6549 12.3656C22.655 12.3653 22.6552 12.365 22.6553 12.3648C22.6555 12.3645 22.6556 12.3642 22 12ZM12 17.25C8.90793 17.25 6.57889 15.862 5.00172 14.4425C4.21352 13.7331 3.62151 13.0228 3.22767 12.4911C3.03112 12.2257 2.88498 12.0063 2.78941 11.8558C2.74165 11.7806 2.7066 11.7227 2.68428 11.685C2.67312 11.6662 2.66515 11.6524 2.66037 11.6441C2.65798 11.6399 2.65639 11.6371 2.6556 11.6357C2.6552 11.635 2.65501 11.6347 2.65501 11.6347C2.65501 11.6347 2.65506 11.6348 2.65516 11.635C2.65521 11.635 2.65533 11.6352 2.65535 11.6353C2.65548 11.6355 2.65562 11.6358 2 12C1.34438 12.3642 1.34455 12.3645 1.34472 12.3648C1.3448 12.365 1.34499 12.3653 1.34514 12.3656C1.34545 12.3661 1.3458 12.3668 1.34621 12.3675C1.34703 12.369 1.34805 12.3708 1.34928 12.373C1.35175 12.3773 1.35504 12.3831 1.35916 12.3903C1.3674 12.4047 1.37896 12.4246 1.39384 12.4497C1.42361 12.5 1.46668 12.571 1.52309 12.6598C1.63585 12.8374 1.80222 13.0868 2.02233 13.3839C2.46183 13.9772 3.11982 14.7669 3.99828 15.5575C5.75444 17.138 8.4254 18.75 12 18.75V17.25Z'
      fill='currentColor'
    />
    <circle cx='12' cy='12' r='3.25' stroke='currentColor' strokeWidth='1.5' />
  </SvgContainer>
);
