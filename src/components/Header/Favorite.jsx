import heart from "../../assets/heart.svg";

const Favourite = ({ onShow }) => {
  return (
    <div
      onClick={onShow}
      className='p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all'
    >
      <img src={heart} alt='heart img' />
      <span>Favourite Locations</span>
    </div>
  );
};

export default Favourite;
