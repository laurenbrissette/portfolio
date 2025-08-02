import { Flex, Heading} from "@chakra-ui/react";
import CardArray from "./ui/card-array"

export default function Resources() {
    return <Flex id="resources" alignItems={"center"} justifyContent={"center"} flexDirection={"column"} gap="20px">
      <Heading size="4xl"alignItems={"center"} justifyContent={"center"} >
        Resources
      </Heading>
<CardArray data={resources}/>
    </Flex>
}

// data for resource cards
const resources = [
    {
    image: 'assets/img/aws.jpeg',
    title: 'AWS Cloud Computing',
    description: ['AWS Certified Cloud Practitioner course', 'Review video: https://www.youtube.com/watch?v=JsmhEgIV1mQ&t=6762s', 'Practice exams: https://github.com/kananinirav/AWS-Certified-Cloud-Practitioner-Notes/tree/master'],
    link: 'https://www.pluralsight.com/?clickid=CjwKCAjw7rbEBhB5EiwA1V49nU3gQw9SFtXzggvr19S3lcG6cVhBeaJbFUV68NL4HiOSjWoMfx0TdxoCH2cQAvD_BwE&utm_source=google&utm_medium=paid-search&utm_campaign=brs-na-all-con-pur-gle-paid_search-evg-kwd-ps_core-e&utm_content=free-trial&gad_source=1&gad_campaignid=22198080696&gbraid=0AAAAADmVFQZ91Hzk-3AIb73KyuAEsO1eL&gclid=CjwKCAjw7rbEBhB5EiwA1V49nU3gQw9SFtXzggvr19S3lcG6cVhBeaJbFUV68NL4HiOSjWoMfx0TdxoCH2cQAvD_BwE',
    isVideo: false,
    buttonContent: 'Check It Out',
  },
  {
    image: 'assets/img/pluralsight.jpeg',
    title: 'Pluralsight Courses',
    description: ['Fundamentals of EF Core', 'AWS Cloud Computing', 'Angular Fundamentals', 'Containers and Images'],
    link: 'https://www.pluralsight.com/?clickid=CjwKCAjw7rbEBhB5EiwA1V49nU3gQw9SFtXzggvr19S3lcG6cVhBeaJbFUV68NL4HiOSjWoMfx0TdxoCH2cQAvD_BwE&utm_source=google&utm_medium=paid-search&utm_campaign=brs-na-all-con-pur-gle-paid_search-evg-kwd-ps_core-e&utm_content=free-trial&gad_source=1&gad_campaignid=22198080696&gbraid=0AAAAADmVFQZ91Hzk-3AIb73KyuAEsO1eL&gclid=CjwKCAjw7rbEBhB5EiwA1V49nU3gQw9SFtXzggvr19S3lcG6cVhBeaJbFUV68NL4HiOSjWoMfx0TdxoCH2cQAvD_BwE',
    isVideo: false,
    buttonContent: 'Check It Out',
  },
  {
    image: 'assets/img/eloquentjs.jpg',
    title: 'Eloquent JavaScript',
    description: 'I created Exquisite Corpse and Code 4 Community Projects in JS with my knowledge '
                + 'of Java and Python, but both were a challenge!  With some extra time summer of 2024, I '
                + 'resolved to read up and learn JavaScript right.',
    link: 'https://eloquentjavascript.net',
    isVideo: false,
    buttonContent: 'Check It Out',
  },
  {
    image: 'assets/img/webdesign.jpeg',
    title: 'Principles of Web Design',
    description: 'Book by Brian D. Miller which gives an overview of "keywords" in industry '
                + 'web development and explains how large scale projects are processed and planned.',
    link: 'https://www.skyhorsepublishing.com/good-books/9781621537878/principles-of-web-design/',
    isVideo: false,
    buttonContent: 'Check It Out',
  },
  {
    image: 'assets/img/codedbias.png',
    title: 'Coded Bias Film',
    description: 'When MIT Media Lab researcher Joy Buolamwini discovers that facial recognition does '
                + 'not see dark-skinned faces accurately, she embarks on a journey to push for the first-ever '
                + 'U.S. legislation against bias in algorithms that impact us all.',
    link: 'https://www.imdb.com/title/tt11394170/',
    isVideo: false,
    buttonContent: 'Check It Out',
  },
];
