import PropTypes from 'prop-types';

const Photos = ({ dataPhotos }) => {

    if(!dataPhotos) return 
    
  return (
<section id="photos" className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]">
    <div className="container mx-auto">
      <div className="flex justify-center flex-wrap -mx-4">
        {dataPhotos.map(data=>
        <div key={data.id} className="w-full md:w-1/2 xl:w-1/3 px-4">
            <div className="bg-white rounded-   lg overflow-hidden mb-10">
                <img
                src={data.url}
                alt={`color ${data.id}`}
                className="w-full"
                />
                <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                <h3>
                    <a
                        href="#s"
                        className="
                        font-mono
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                        >
                    {data.title}
                    </a>
                </h3>
                <p className="text-base text-body-color leading-relaxed mb-7">
                    Lorem ipsum dolor sit amet pretium consectetur adipiscing
                    elit. Lorem consectetur adipiscing elit.
                </p>
                <a
                    href="#s"
                    className="
                    inline-block
                    py-2
                    px-7
                    border border-[#E5E7EB]
                    rounded-full
                    text-base text-body-color
                    font-medium
                    hover:border-primary hover:bg-primary hover:text-white
                    transition
                    "
                    >
                View Details
                </a>
                </div>
            </div>
         </div>
        )}            
      </div>
   </div>
</section>
  )
}

Photos.propTypes = {
  dataPhotos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
  })),
};

export default Photos