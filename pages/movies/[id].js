import { useRouter } from "next/router";

export default function Post(){
    const router = useRouter();
    const {id} = router.query;
    return(
        <>
            Post{id}
        </>
    )
}

export async function getServerSideProps({parms}){
  const resp = await fetch (`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=1/${parms.id}`)
  const results = await resp.json();

  return{
    props:{
        results,
    }
  }
}