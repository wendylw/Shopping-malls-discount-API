import { Test, TestingModule } from '@nestjs/testing';
import { MallsService } from './malls.service';

describe('MallsService', () => {
  let service: MallsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MallsService],
    }).compile();

    service = module.get<MallsService>(MallsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
