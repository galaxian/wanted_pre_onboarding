import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Company } from 'src/company/company.entity';
import { CompanyService } from 'src/company/company.service';
import { CreatePostDto } from './dto/createPost.dto';
import { Posts } from './post.entity';
import { PostService } from './post.service';

describe('PostService', () => {
  let service: PostService;

  const mockPostRepository = {
    create: jest.fn().mockImplementation(dto => dto),
    save: jest.fn().mockImplementation(posts => Promise.resolve({
      id: Date.now(),
      ...posts
    }))
  }

  const mockCompanyRepository = {
    findOneBy: jest.fn().mockImplementation(companyName => Promise.resolve({
      id: Date.now(), 
      country: "미국",
      region: "어딘가",
      ...companyName}))
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PostService, 
      {
        provide: getRepositoryToken(Posts),
        useValue: mockPostRepository,
      },
      CompanyService,
      {
        provide: getRepositoryToken(Company),
        useValue: mockCompanyRepository,
      }],
    }).compile();

    service = module.get<PostService>(PostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it("Should be return a Posts", async () => {
    const createPost = new CreatePostDto();
    createPost.companyName = "구글";
    createPost.content = "내용";
    createPost.language = "python";
    createPost.position = "백엔드";
    createPost.price = 100000;
    const result = await service.createPost(createPost);
    expect(result).toEqual({
      id: expect.any(Number),
      position: "백엔드",
      price: 100000,
      content: "내용",
      language: "python",
      company: {
        id: expect.any(Number), 
        country: "미국",
        region: "어딘가",
        companyName: createPost.companyName
      }
    });
  })


});
