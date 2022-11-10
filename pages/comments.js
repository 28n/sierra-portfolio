import Layout from "../components/layouts/article";
import { useToast, Checkbox, HStack, Container, Box, Heading, FormControl, Textarea, Button, FormLabel, FormHelperText, Input, Spacer, Tag } from '@chakra-ui/react'
import Section from "../components/section";
import { useState, useEffect } from 'react'
import axios from "axios"
import { useSession, signIn, signOut } from 'next-auth/react'
import { FaSignInAlt, FaSignOutAlt, FaTrashAlt } from 'react-icons/fa'
import { MdAdminPanelSettings } from 'react-icons/md'
import { AiFillStar } from 'react-icons/ai'

const raw_flamulator = ["4r5e", "5h1t", "5hit", "a55", "anal", "anus", "ar5e", "arrse", "arse", "ass", "ass-fucker", "asses", "assfucker", "assfukka", "asshole", "assholes", "asswhole", "a_s_s", "b!tch", "b00bs", "b17ch", "b1tch", "ballbag", "balls", "ballsack", "bastard", "beastial", "beastiality", "bellend", "bestial", "bestiality", "bi+ch", "biatch", "bitch", "bitcher", "bitchers", "bitches", "bitchin", "bitching", "bloody", "blow job", "blowjob", "blowjobs", "boiolas", "bollock", "bollok", "boner", "boob", "boobs", "booobs", "boooobs", "booooobs", "booooooobs", "breasts", "buceta", "bugger", "bum", "bunny fucker", "butt", "butthole", "buttmuch", "buttplug", "c0ck", "c0cksucker", "carpet muncher", "cawk", "chink", "cipa", "cl1t", "clit", "clitoris", "clits", "cnut", "cock", "cock-sucker", "cockface", "cockhead", "cockmunch", "cockmuncher", "cocks", "cocksuck", "cocksucked", "cocksucker", "cocksucking", "cocksucks", "cocksuka", "cocksukka", "cok", "cokmuncher", "coksucka", "coon", "cox", "crap", "cum", "cummer", "cumming", "cums", "cumshot", "cunilingus", "cunillingus", "cunnilingus", "cunt", "cuntlick", "cuntlicker", "cuntlicking", "cunts", "cyalis", "cyberfuc", "cyberfuck", "cyberfucked", "cyberfucker", "cyberfuckers", "cyberfucking", "d1ck", "damn", "dick", "dickhead", "dildo", "dildos", "dink", "dinks", "dirsa", "dlck", "dog-fucker", "doggin", "dogging", "donkeyribber", "doosh", "duche", "dyke", "ejaculate", "ejaculated", "ejaculates", "ejaculating", "ejaculatings", "ejaculation", "ejakulate", "f u c k", "f u c k e r", "f4nny", "fag", "fagging", "faggitt", "faggot", "faggs", "fagot", "fagots", "fags", "fanny", "fannyflaps", "fannyfucker", "fanyy", "fatass", "fcuk", "fcuker", "fcuking", "feck", "fecker", "felching", "fellate", "fellatio", "fingerfuck", "fingerfucked", "fingerfucker", "fingerfuckers", "fingerfucking", "fingerfucks", "fistfuck", "fistfucked", "fistfucker", "fistfuckers", "fistfucking", "fistfuckings", "fistfucks", "flange", "fook", "fooker", "fuck", "fucka", "fucked", "fucker", "fuckers", "fuckhead", "fuckheads", "fuckin", "fucking", "fuckings", "fuckingshitmotherfucker", "fuckme", "fucks", "fuckwhit", "fuckwit", "fudge packer", "fudgepacker", "fuk", "fuker", "fukker", "fukkin", "fuks", "fukwhit", "fukwit", "fux", "fux0r", "f_u_c_k", "gangbang", "gangbanged", "gangbangs", "gaylord", "gaysex", "goatse", "God", "god-dam", "god-damned", "goddamn", "goddamned", "hardcoresex", "hell", "heshe", "hoar", "hoare", "hoer", "homo", "hore", "horniest", "horny", "hotsex", "jack-off", "jackoff", "jap", "jerk-off", "jism", "jiz", "jizm", "jizz", "kawk", "knob", "knobead", "knobed", "knobend", "knobhead", "knobjocky", "knobjokey", "kock", "kondum", "kondums", "kum", "kummer", "kumming", "kums", "kunilingus", "l3i+ch", "l3itch", "labia", "lust", "lusting", "m0f0", "m0fo", "m45terbate", "ma5terb8", "ma5terbate", "masochist", "master-bate", "masterb8", "masterbat*", "masterbat3", "masterbate", "masterbation", "masterbations", "masturbate", "mo-fo", "mof0", "mofo", "mothafuck", "mothafucka", "mothafuckas", "mothafuckaz", "mothafucked", "mothafucker", "mothafuckers", "mothafuckin", "mothafucking", "mothafuckings", "mothafucks", "mother fucker", "motherfuck", "motherfucked", "motherfucker", "motherfuckers", "motherfuckin", "motherfucking", "motherfuckings", "motherfuckka", "motherfucks", "muff", "mutha", "muthafecker", "muthafuckker", "muther", "mutherfucker", "n1gga", "n1gger", "nazi", "nigg3r", "nigg4h", "nigga", "niggah", "niggas", "niggaz", "nigger", "niggers", "nob", "nob jokey", "nobhead", "nobjocky", "nobjokey", "numbnuts", "nutsack", "orgasim", "orgasims", "orgasm", "orgasms", "p0rn", "pawn", "pecker", "penis", "penisfucker", "phonesex", "phuck", "phuk", "phuked", "phuking", "phukked", "phukking", "phuks", "phuq", "pigfucker", "pimpis", "piss", "pissed", "pisser", "pissers", "pisses", "pissflaps", "pissin", "pissing", "pissoff", "poop", "porn", "porno", "pornography", "pornos", "prick", "pricks", "pron", "pube", "pusse", "pussi", "pussies", "pussy", "pussys", "rectum", "retard", "rimjaw", "rimming", "s hit", "s.o.b.", "sadist", "schlong", "screwing", "scroat", "scrote", "scrotum", "semen", "sex", "sh!+", "sh!t", "sh1t", "shag", "shagger", "shaggin", "shagging", "shemale", "shi+", "shit", "shitdick", "shite", "shited", "shitey", "shitfuck", "shitfull", "shithead", "shiting", "shitings", "shits", "shitted", "shitter", "shitters", "shitting", "shittings", "shitty", "skank", "slut", "sluts", "smegma", "smut", "snatch", "son-of-a-bitch", "spac", "spunk", "s_h_i_t", "t1tt1e5", "t1tties", "teets", "teez", "testical", "testicle", "tit", "titfuck", "tits", "titt", "tittie5", "tittiefucker", "titties", "tittyfuck", "tittywank", "titwank", "tosser", "turd", "tw4t", "twat", "twathead", "twatty", "twunt", "twunter", "v14gra", "v1gra", "vagina", "viagra", "vulva", "w00se", "wang", "wank", "wanker", "wanky", "whoar", "whore", "willies", "willy", "xrated", "xxx", "Hurensohn", "Bastard", "Schwanzlustscher", "Schwuchtel", "Hurens0hn", "Wixxer", "Spast"];

const flamulator_words = raw_flamulator.map((w) => { return w.toLowerCase() })

const Comments = () => {
  const { data: session } = useSession()
  const toast = useToast()
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios.get('/api/comments').then((res) => {
      setComments(res.data)
      setLoading(false)
    })
  }, [])

  const [name, setName] = useState('')
  const [comment, setComment] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [sendAsPremium, setSendAsPremium] = useState(false)
  const [sendAsAdmin, setSendAsAdmin] = useState(false)

  function exitSubmit() {
    setName('')
    setComment('')
    setSubmitting(false)
    return
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)

    const data = {
      name,
      comment,
      isPremium: session ? sendAsPremium : false,
      isAdmin: session ? session.user?.email === 'sierra@samsierra.de' || session.user?.name === 'sierra' ? sendAsAdmin : false : false,
    }

    if (flamulator_words.includes(name.toLowerCase()) || flamulator_words.includes(comment.toLowerCase())) {
      exitSubmit()
      alert('You are not allowed to use this word!')
      return
    }

    if (name.trim().length === 0 || comment.trim().length === 0) {
      exitSubmit()
      return
    }

    if (name.length <= 2 || comment.length <= 2) {
      exitSubmit()
      return
    }

    if (!session && name.toLowerCase().includes('sierra')) {
      exitSubmit()
      return
    }
    if (session?.user?.email !== 'sierra@samsierra.de' && session?.user?.name !== 'sierra') {
      if (name.toLowerCase().includes('sierra')) {
        exitSubmit()
        return
      }
    }

    axios.post('/api/createComment', data).then((res) => {
      setName('')
      setComment('')
      axios.get('/api/comments').then((res) => {
        setComments(res.data)
      })
    }).finally(() => {
      setTimeout(() => {
        setSubmitting(false)
      }, 5000)
    })

  }

  function handleDelete(id) {
    function deleteComment() {
      axios.post('/api/deleteComment', { id }).then((res) => {
        axios.get('/api/comments').then((res) => {
          setComments(res.data)
        })
      })
      toast({
        title: "Kommentar wird gelöscht.",
        status: "success",
        duration: 5000,
        isClosable: true,
      })
    }
    confirm("Are you sure you want to delete comment " + id + "?") && deleteComment()
  }
  return (
    <Layout title="Kommentare">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Kommentare
        </Heading>
        <Section delay={0.3}>
          <Box as="div" borderWidth={1} borderColor={"#525252"} p={4} borderRadius={"md"}>
            <Container display={"flex"} alignItems={"center"}>
              <Heading as="h2" fontSize={16} mb={4}>
                Einen Kommentar schreiben
              </Heading>
              <Spacer />
              {session ? (
                <Button onClick={() => { signOut() }} variant={"ghost"} colorScheme="teal">
                  <FaSignOutAlt />
                </Button>
              ) : (
                <Button onClick={() => { signIn() }} variant={"ghost"} colorScheme="teal">
                  <FaSignInAlt />
                </Button>
              )}
            </Container>
            <form onSubmit={(event) => {
              handleSubmit(event)
            }}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input value={name} type="text" borderColor={"#525252"} onChange={(event) => { setName(event.target.value) }} />
                <FormHelperText mb={4}>Dein Name wird veröffentlicht.</FormHelperText>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Nachricht</FormLabel>
                <Textarea value={comment} borderColor={"#525252"} onChange={(event) => { setComment(event.target.value) }} />
              </FormControl>
              <Button disabled={submitting} width={"full"} mt={4} colorScheme="teal" type="submit">Erstellen</Button>
            </form>
            {session && (
              <Box mt={4} display={"flex"} gap={2}>
                <Checkbox onChange={(e) => { setSendAsPremium(e.target.checked) }} colorScheme={"teal"}>Send as
                  <Tag ml={2} colorScheme={"orange"}>
                    Premium
                    <Box ml={2}>
                      <AiFillStar />
                    </Box>
                  </Tag>
                </Checkbox>
                {session?.user?.email === 'sierra@samsierra.de' && session.user?.name === 'sierra' && (
                  <Checkbox onChange={(e) => { setSendAsAdmin(e.target.checked) }} colorScheme={"teal"}>Send as
                    <Tag ml={2} colorScheme={"red"}>
                      Admin
                      <Box ml={2}>
                        <MdAdminPanelSettings />
                      </Box>
                    </Tag>
                  </Checkbox>
                )}
              </Box>
            )}
          </Box>
        </Section>
        <Section delay={0.6}>
          <Box as="div" p={3} borderWidth={1} borderColor={"#525252"} borderRadius={"md"}>
            <Heading as="h2" fontSize={16} mb={4}>
              Rollen
            </Heading>
            <HStack>
              <Tag colorScheme={"gray"}>
                Besucher
              </Tag>
              <Tag colorScheme={"orange"}>
                Premium
                <Box ml={2}>
                  <AiFillStar />
                </Box>
              </Tag>
              <Tag colorScheme={"red"}>
                Admin
                <Box ml={2}>
                  <MdAdminPanelSettings />
                </Box>
              </Tag>
            </HStack>
          </Box>
        </Section>
        <Section delay={0.9}>
          {loading ? <p>Lade...</p> : (
            <Box as="div" borderWidth={1} borderColor={"#525252"} borderRadius={"md"}>
              <Heading as="h2" fontSize={16} p={3} borderBottomWidth={1}>
                Kommentare
              </Heading>
              {comments.length === 0 ? (
                <Box m={4}>
                  <p>Keine Kommentare vorhanden.</p>
                </Box>
              ) : comments.map((c, index) => {
                const len = comments.length
                let isLast = false
                if (index === len - 1) {
                  isLast = true
                }

                return (
                  <Box key={index} as="div" p={3} borderBottomWidth={isLast ? 0 : 1} borderBottomColor={"#525252"}>
                    <Container display={"flex"} alignItems={"center"} mb={4}>
                      <Tag colorScheme={c.isAdmin ? "red" : c.isPremium ? "orange" : "gray"}>
                        {c.author}

                        {c.isAdmin ? (<Box ml={2}><MdAdminPanelSettings /></Box>) : c.isPremium && (<Box ml={2}><AiFillStar /></Box>)}
                      </Tag>
                      <Spacer />
                      <Heading as="h3" fontSize={12}>
                        {new Date(c.createdAt).toLocaleString()}
                      </Heading>
                      {session && session.user.email === "sierra@samsierra.de" && session.user.name === "sierra" && (
                        <>
                          <Button onClick={() => { handleDelete(c.id) }} ml={2} variant={"ghost"} colorScheme="red">
                            <FaTrashAlt />
                          </Button>
                        </>
                      )}
                    </Container>
                    <p>{c.content}</p>
                  </Box>
                )
              })}
            </Box>
          )}
        </Section>
      </Container>
    </Layout>
  );
}

export default Comments;
export { getServerSideProps } from "../components/chakra";
