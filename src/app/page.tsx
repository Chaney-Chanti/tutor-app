import CustomButton from '@/components/CustomButton';
import Searchbar from '@/components/Searchbar';

export default function Home() {
  return (
    <main className="mainpage">
      <Searchbar/>

      <CustomButton 
      title="EXPLORE"
      containerStyles="bg-blue-500 text-pink-400 rounded-full p-2 content-center text-sm"
      />
      
      {/* <Footer/> */}
    </main>
  );
}
