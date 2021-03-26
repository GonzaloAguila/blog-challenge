import image_A from "../assets/undraw_Blog_post_re_fy5x.svg";
import image_B from "../assets/undraw_mobile_posts_tlwg.svg";
import image_C from "../assets/undraw_Post_re_mtr4.svg";
import image_D from "../assets/undraw_Updates_re_o5af.svg";

const generateImage = () => {
  const allImages = [image_A, image_B, image_C, image_D];
  const randomImage = allImages[Math.floor(Math.random() * 4)];
  return randomImage;
};
export default generateImage;
