import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HttpModule } from './http.module';
// import { MailService } from './mail/mail.service';
// import { PostmarkMailService } from './mail/postmark-mail.service';
// import { SMTPMail } from './mail/stmp-mail.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [
    PrismaService,
    // {
    //   provide: MailService,
    //   useClass: SMTPMail,
    // },
  ],
})
export class AppModule {}
