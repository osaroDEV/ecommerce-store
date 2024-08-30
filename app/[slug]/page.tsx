import ProductImages from '../components/ProductImages';
import CustomizeProduct from '../components/CustomizeProduct';
import Add from '../components/Add';

const SinglePage = () => {
  return (
    <div className='my-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col lg:flex-row gap-16'>
      {/* image */}
      <div className='w-full lg:w-1/2 lg:sticky top-20 h-max'>
        <ProductImages />
      </div>
      {/* text */}
      <div className='w-full lg:w-1/2 flex flex-col gap-6'>
        <h1 className='text-4xl font-medium'>Product Name</h1>
        <p className='text-gray-500'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          modi, soluta fuga eius reprehenderit unde nesciunt. Quibusdam enim
          dolorem, distinctio doloribus neque repellat fugiat quidem! Aut quos
          cumque excepturi quis.
        </p>
        <hr className='h-[2px] bg-gray-100' />
        <div className='flex items-center gap-4'>
          <h3 className='text-xl text-gray-500 line-through'>$68</h3>
          <h2 className='font-medium text-2xl'>$35</h2>
        </div>
        <hr className='h-[2px] bg-gray-100' />
        <CustomizeProduct />
        <Add />
        <hr className='h-[2px] bg-gray-100' />
        <div className='text-sm'>
          <h4 className='font-medium mb-4'>Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
            ullam eveniet, voluptatibus quis maxime aut expedita soluta odit
            explicabo nam animi accusantium voluptates magnam, quaerat optio
            illum iusto distinctio labore eius quae, repudiandae vitae? Vero
            modi numquam recusandae dolorum eius? Non, dolorum ipsa. Amet
            perferendis sequi, aperiam accusamus iusto nihil ipsam minima
            obcaecati rem totam eos reprehenderit porro nam aliquid!
          </p>
        </div>
        <div className='text-sm'>
          <h4 className='font-medium mb-4'>Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
            ullam eveniet, voluptatibus quis maxime aut expedita soluta odit
            explicabo nam animi accusantium voluptates magnam, quaerat optio
            illum iusto distinctio labore eius quae, repudiandae vitae? Vero
            modi numquam recusandae dolorum eius? Non, dolorum ipsa. Amet
            perferendis sequi, aperiam accusamus iusto nihil ipsam minima
            obcaecati rem totam eos reprehenderit porro nam aliquid!
          </p>
        </div>
        <div className='text-sm'>
          <h4 className='font-medium mb-4'>Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
            ullam eveniet, voluptatibus quis maxime aut expedita soluta odit
            explicabo nam animi accusantium voluptates magnam, quaerat optio
            illum iusto distinctio labore eius quae, repudiandae vitae? Vero
            modi numquam recusandae dolorum eius? Non, dolorum ipsa. Amet
            perferendis sequi, aperiam accusamus iusto nihil ipsam minima
            obcaecati rem totam eos reprehenderit porro nam aliquid!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
