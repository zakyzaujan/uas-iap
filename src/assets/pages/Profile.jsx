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
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";
import useTitle from "@/hooks/useTitle";

const Profile = () => {
  useTitle("Profil Saya");

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-6 max-w-4xl mb-6">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <div className="w-32 h-32 mx-auto mb-6">
            <img
              src="https://media1.tenor.com/m/-uc6nONMFsQAAAAd/freaky-ahh-cat.gif"
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
            <Button
              variant="ghost"
              size="icon"
              className={"bg-gray-100/60"}
              asChild
            >
              <a
                href="https://github.com/zakyzaujan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={"bg-gray-100/60"}
              asChild
            >
              <a
                href="https://linkedin.com/in/zaky-zaujan-jayaputra"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={"bg-gray-100/60"}
              asChild
            >
              <a
                href="https://instagram.com/zaky_zaujan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </section>

        {/* Sumber Data API Section */}
        <section id="sumber-data-api" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Sumber Data API</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">TheMealDB.com</h3>
                  <a
                    href="https://www.themealdb.com/api.php"
                    className="text-muted-foreground hover:text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.themealdb.com/api.php
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Tentang Saya Section */}
        <section id="tentang-saya" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Tentang Saya</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Saya adalah mahasiswa semester 6 Sistem Informasi di UIN Imam
                Bonjol Padang. Saat ini sedang mempelajari teknologi
                pengembangan web terbaru di mana saya menggunakan Vite + React
                untuk <i>front-end</i>. Sedangkan menggunakan Node + Express.js
                untuk <i>back-end</i>.
              </p>
              <p>
                Selama perkuliahan, saya sudah mengerjakan proyek-proyek
                seperti:
                <ul className="list-disc list-inside">
                  <li>
                    Aplikasi Retail Berbasis Web pada Toko Ajo LPN Menggunakan
                    PHP <i>Native</i>
                  </li>
                  <li>
                    Aplikasi Pencari Resep Berbasis <i>Mobile</i> Menggunakan
                    Flutter
                  </li>
                  <li>
                    Sistem Informasi Manajemen Inventaris Harian (MIHRAB) BAZNAS
                    Padang Berbasis Web Menggunakan React
                  </li>
                </ul>
              </p>
              <p>
                Di waktu luang, saya suka belajar teknologi baru, bermain video
                game, dan mengikuti perkembangan ilmu di bidang data science.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Keahlian Section */}
        <section id="keahlian" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Keahlian & Teknologi</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Front-End</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Javascript</Badge>
                    <Badge variant="secondary">Tailwind</Badge>
                    <Badge variant="secondary">HTML5</Badge>
                    <Badge variant="secondary">CSS3</Badge>
                  </div>
                </div>
                <Separator />
                <div>
                  <h3 className="font-semibold mb-3">Back-End</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">Express.js</Badge>
                    <Badge variant="secondary">PHP</Badge>
                    <Badge variant="secondary">MySQL</Badge>
                  </div>
                </div>
                <Separator />
                <div>
                  <h3 className="font-semibold mb-3">Programming Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Python</Badge>
                  </div>
                </div>
                <Separator />
                <div>
                  <h3 className="font-semibold mb-3">Tools & Platforms</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Git</Badge>
                    <Badge variant="secondary">Figma</Badge>
                    <Badge variant="secondary">VS Code</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Pendidikan Section */}
        <section id="pendidikan" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Pendidikan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">S1 Sistem Informasi</h3>
                  <p className="text-muted-foreground">
                    UIN Imam Bonjol Padang
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Semester 6 (2022 – Sekarang)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Kontak Saya Section */}
        <section id="kontak-saya">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Kontak Saya</CardTitle>
              <CardDescription>
                Saya terbuka untuk peluang kolaborasi, magang, atau pertanyaan
                seputar proyek. Silahkan menghubungi saya melalui email atau
                media sosial di bawah ini :)
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
      </main>
    </div>
  );
};

export default Profile;
