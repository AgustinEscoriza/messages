import { MessagesRepository } from "./messages.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MessagesService {

  constructor(public messagesRepo: MessagesRepository){
    // Service is creating its own dependencies
    // DONT DO THIS ON REAL APPS
    this.messagesRepo = messagesRepo;
  }
  
  async findOne(id: string){
    return this.messagesRepo.findOne(id);
  }

  findAll(){
    return this.messagesRepo.findAll();
  }

  create(content: string){
    return this.messagesRepo.create(content);
  }
};