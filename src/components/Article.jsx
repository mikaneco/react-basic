import {useState} from 'react';
import PublishButton from './PublishButton';

const Article = (props) => {
  const [isPublished, setIsPublished] = useState(false);
  const publishArticle = () => {
    if(isPublished == true){
      setIsPublished(false)
    }else{
      setIsPublished(true)
    }
  }

  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <PublishButton isPublished={isPublished} onClick={publishArticle}> 公開</PublishButton>
    </div>
  )
}

export default Article;