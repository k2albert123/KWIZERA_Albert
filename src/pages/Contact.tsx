import React from 'react';
import { motion } from 'framer-motion';
import GridMotion from '../components/ui/GridMotion';
import ContactForm from '../components/ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
        const gridItems =["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUMHEQxsDgUTj320ea5yetMr2Nwzqjx_bKqQ&s",
        "https://plugins.jetbrains.com/files/25358/screenshot_d2dcf328-4a03-41e7-869f-5f41fc187b86",
        "https://thumbs.dreamstime.com/b/creative-coding-backdrop-dark-text-programming-future-concept-d-rendering-147291480.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjADaceLyCXeg6QERLp6B1thjQovcfV-wYWA&s",
        "https://images.stockcake.com/public/3/c/9/3c95a770-7877-4d70-965f-c558d4f99326_large/coding-in-dark-stockcake.jpg",
        "https://images.unsplash.com/photo-1520583457224-aee11bad5112?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGFyayUyMGNvZGV8ZW58MHx8MHx8fDA%3D",
        "https://c1.wallpaperflare.com/preview/552/758/364/computer-laptop-macbook-coding.jpg",
        "https://wallpapercave.com/wp/wp12498725.png",
        "https://w0.peakpx.com/wallpaper/157/626/HD-wallpaper-java-glitter-logo-programming-language-grid-metal-background-java-creative-programming-language-signs-java-logo.jpg",
        "https://miro.medium.com/0*QQ9EGS4uBADBG8aP.gif",
        "https://wallpapers.com/images/hd/angular-js-to-angular-migration-gfiq1mjry6s16ql4.jpg",
        "https://w0.peakpx.com/wallpaper/1021/44/HD-wallpaper-python-black-logo-programming-language-grid-metal-background-python-artwork-creative-programming-language-signs-python-logo.jpg",
        "https://iq.opengenus.org/content/images/2023/07/Next.png",
        "https://miro.medium.com/v2/resize:fit:1400/1*mBR6k8EfSPDS4OHelMrfLA.jpeg",
        "https://wallpapercave.com/wp/wp8114615.jpg",
        "https://thumbs.dreamstime.com/b/creative-coding-backdrop-dark-text-programming-future-concept-d-rendering-147291480.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjADaceLyCXeg6QERLp6B1thjQovcfV-wYWA&s",
        "https://images.stockcake.com/public/3/c/9/3c95a770-7877-4d70-965f-c558d4f99326_large/coding-in-dark-stockcake.jpg",
        "https://images.unsplash.com/photo-1520583457224-aee11bad5112?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGFyayUyMGNvZGV8ZW58MHx8MHx8fDA%3D",
        "https://c1.wallpaperflare.com/preview/552/758/364/computer-laptop-macbook-coding.jpg",
        "https://wallpapercave.com/wp/wp12498725.png",
        "https://w0.peakpx.com/wallpaper/157/626/HD-wallpaper-java-glitter-logo-programming-language-grid-metal-background-java-creative-programming-language-signs-java-logo.jpg",
        "https://miro.medium.com/0*QQ9EGS4uBADBG8aP.gif",
        "https://wallpapers.com/images/hd/angular-js-to-angular-migration-gfiq1mjry6s16ql4.jpg",
        "https://w0.peakpx.com/wallpaper/1021/44/HD-wallpaper-python-black-logo-programming-language-grid-metal-background-python-artwork-creative-programming-language-signs-python-logo.jpg",
        "https://iq.opengenus.org/content/images/2023/07/Next.png",
        "https://miro.medium.com/v2/resize:fit:1400/1*mBR6k8EfSPDS4OHelMrfLA.jpeg",
        "https://wallpapercave.com/wp/wp8114615.jpg",
    ]
    return (
        <div  className="relative min-h-screen pt-32 pb-24">
            <GridMotion items={gridItems} className="fixed inset-0 z-0" />
            
            <div className="relative z-10 container mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-5xl md:text-7xl font-bold font-headings mb-6"><span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Get in Touch</span></h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Ready to start a new project? Feel free to reach out via the form below or through my contact details.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="glass p-8 md:p-12 rounded-3xl space-y-8"
                    >
                        <h2 className="text-3xl font-bold font-headings mb-4">Contact Info</h2>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Email</p>
                                    <p className="font-medium text-lg">k2albert123@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Phone</p>
                                    <p className="font-medium text-lg">+123 456 7890</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Location</p>
                                    <p className="font-medium text-lg">Kigali, Rwanda</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="glass p-8 md:p-12 rounded-3xl"
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
