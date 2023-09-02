const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
    heading1: "font-pretendard font-light text-[2rem] text-darkblue tracking-tighter leading-[2.25rem] w-full",
    heading2: "font-pretendard font-normal text-[1.5rem] text-darkblue tracking-tighter leading-[66.8px] w-full",
    heading4: "font-pretendard font-light text-[0.85rem] text-black",
    heading5: "font-pretendard font-light text-[0.85rem] text-grey",
    body1: "font-pretendard font-light text-[1.25rem] text-darkblue tracking-tight w-full",
    body2: "font-pretendard font-regular text-[1.25rem] text-darkblue tracking-tight w-full",
    paragraph: "font-pretendard font-light tracking-tight text-darkblue text-[1.15rem] leading-normal",
    paragraph2: "font-pretendard font-regular tracking-tight text-darkblue text-[1.15rem] leading-normal",
    link: "font-pretendard font-light tracking-tight text-grey text-[1rem] leading-tight w-full",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;