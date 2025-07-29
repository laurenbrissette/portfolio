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
