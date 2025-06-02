import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  SquareArrowOutUpRight,
} from "lucide-react";
import useTitle from "@/hooks/useTitle";

const Profile = () => {
  useTitle("Profil Saya");

  const socialLinks = [
    {
      Icon: Github,
      href: "https://github.com/zakyzaujan",
      label: "GitHub",
    },
    {
      Icon: Linkedin,
      href: "https://linkedin.com/in/zaky-zaujan-jayaputra",
      label: "LinkedIn",
    },
    {
      Icon: Instagram,
      href: "https://instagram.com/zaky_zaujan",
      label: "Instagram",
    },
  ];

  const skillSections = [
    {
      title: "Front-End",
      items: ["React", "Javascript", "Tailwind", "HTML5", "CSS3"],
    },
    {
      title: "Back-End",
      items: ["Node.js", "Express.js", "PHP", "MySQL"],
    },
    {
      title: "Programming Languages",
      items: ["Python"],
    },
    {
      title: "Tools & Platforms",
      items: ["Git", "Figma", "VS Code"],
    },
  ];

  const apiSources = [
    {
      title: "List Kategori",
      url: "https://www.themealdb.com/api/json/v1/1/categories.php",
      description: "Mengambil semua kategori masakan.",
    },
    {
      title: "Daftar Makanan per Kategori",
      url: "https://www.themealdb.com/api/json/v1/1/filter.php?c={category}",
      description: "Mengambil daftar makanan berdasarkan kategori.",
    },
    {
      title: "Pencarian Makanan",
      url: "https://www.themealdb.com/api/json/v1/1/search.php?s={query}",
      description: "Mencari makanan berdasarkan nama.",
    },
    {
      title: "Detail Makanan",
      url: "hwww.themealdb.com/api/json/v1/1/lookup.php?i={id}",
      description: "Mengambil detail lengkap dari satu makanan berdasarkan ID.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6 max-w-4xl mb-6">
      <section className="text-center mb-12">
        <div className="w-48 h-48 mx-auto mb-6">
          <img
            src="https://avatars.githubusercontent.com/u/48984157?v=4"
            alt="Profil"
            className="w-full h-full rounded-full border-4 border-primary/20 object-cover z-0"
          />
        </div>
        <h1 className="text-4xl font-bold mb-2">Zaky Zaujan J.</h1>
        <p className="text-xl text-muted-foreground mb-4">
          Mahasiswa Sistem Informasi, UIN Imam Bonjol Padang
        </p>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Tertarik pada hal-hal terkait pengembangan web, data science,
          teknologi terbaru, dan video game.
        </p>
        <div className="flex justify-center gap-4">
          {socialLinks.map(
            (
              { Icon, href, label } // eslint-disable-line no-unused-vars
            ) => (
              <Button
                key={label}
                variant="ghost"
                size="icon"
                className="bg-white/80 hover:bg-white/90 backdrop-blur-sm text-muted-foreground shadow-sm transition-colors"
                asChild
              >
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              </Button>
            )
          )}
        </div>
      </section>

      <section id="tentang-saya" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Tentang Saya</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Saya adalah mahasiswa semester 6 Sistem Informasi di UIN Imam
              Bonjol Padang. Saat ini sedang mempelajari teknologi pengembangan
              web terbaru di mana saya menggunakan Vite + React untuk{" "}
              <i>front-end</i>. Sedangkan menggunakan Node + Express.js untuk{" "}
              <i>back-end</i>.
            </p>
            <p>
              Selama perkuliahan, saya sudah mengerjakan proyek-proyek seperti:
              <ul className="list-disc list-inside">
                <li>
                  Aplikasi Retail Berbasis Web pada Toko Ajo LPN Menggunakan PHP{" "}
                  <i>Native</i>
                </li>
                <li>
                  Sistem Informasi Manajemen Inventaris Harian (MIHRAB) BAZNAS
                  Padang Berbasis Web Menggunakan React
                </li>
              </ul>
            </p>
            <p>
              Di waktu luang, saya suka belajar teknologi baru, bermain video
              game, dan mengikuti perkembangan ilmu di bidang web{" "}
              <i>development</i> & <i>data science</i>.
            </p>
          </CardContent>
        </Card>
      </section>

      <section id="keahlian" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Keahlian & Teknologi</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {skillSections.map(({ title, items }) => (
                <div key={title}>
                  <h3 className="font-semibold mb-3">{title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  {title !== skillSections[skillSections.length - 1].title && (
                    <Separator className="my-4" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="pendidikan" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Pendidikan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">S1 Sistem Informasi</h3>
                <p className="text-muted-foreground">UIN Imam Bonjol Padang</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Semester 6 (2022 – Sekarang)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="sumber-data-api" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex flex-row gap-1">
              Sumber Data API{" "}
              <a
                href="https://www.themealdb.com/api.php"
                className="text-[1.2rem] text-muted-foreground hover:text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SquareArrowOutUpRight size={20} />
              </a>
            </CardTitle>
            <p>Daftar endpoint API yang saya gunakan:</p>
          </CardHeader>
          <CardContent className="space-y-4">
            {apiSources.map(({ title, url, description }) => (
              <div key={url} className="border rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground mb-1">
                  <a className="font-semibold">GET </a>
                  <code className="bg-gray-100 px-1 rounded break-words">
                    {url}
                  </code>
                </p>
                <p className="text-sm">{description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section id="kontak-saya">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Kontak Saya</CardTitle>
            <CardDescription>
              Saya terbuka untuk peluang kolaborasi, magang, atau pertanyaan
              seputar proyek. Silahkan menghubungi saya melalui email atau media
              sosial di bawah ini :)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                  <span>zakyzaujan@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-muted-foreground" />
                  <span>+62 823 9459 4452</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                  <span>Sungai Bangek, Padang, Sumatera Barat</span>
                </div>
              </div>
              <div className="space-y-3">
                <Button asChild className="w-full">
                  <a href="mailto:zakyzaujan@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Kirim Email
                  </a>
                </Button>
                <Button variant="outline" asChild className="w-full">
                  <a
                    href="https://linkedin.com/in/zaky-zaujan-jayaputra"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" asChild className="w-full">
                  <a
                    href="https://github.com/zakyzaujan"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Profile;
