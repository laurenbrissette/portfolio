import { Flex, Heading, Text} from "@chakra-ui/react";

export default function Skills() {
    return <Flex id="experience" alignItems={"center"} justifyContent={"center"} flexDirection={"column"} gap="20px">
      <Heading size="4xl" alignItems={"center"} justifyContent={"center"} fontFamily="Cambria" fontWeight="normal">
        Technical Skills
      </Heading>
      <Flex flexDir={"column"}>
        <Line heading="Languages" data="Java, JavaScript/TypeScript, Python, C#, SQL, HTML/CSS"/>
        <Line heading="Frameworks & Databases" data="React, Next.js, Angular, .NET, Nest.js, EF Core, JUnit, PostgreSQL, Supabase"/>
        <Line heading="Tools & Platforms" data="Git, Docker, Prisma, Vercel"/>
        <Line heading="Certifications" data="AWS Certified Cloud Practitioner (CLF-C02)"/>
      </Flex>
    </Flex>
}

function Line(
    {heading, data}
) {
    return <Flex gap="2">
        <Text fontWeight="bold">{heading}:</Text>
        <Text>{data}</Text>
    </Flex>
}