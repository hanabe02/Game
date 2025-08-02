<template>
  <div class="select-view">
    <h2>👥 생존자를 선택하세요</h2>
    <div class="candidates">
      <div
        v-for="(person, index) in candidates"
        :key="index"
        class="candidate"
      >
        <h3>{{ person.name }} <span class="grade">({{ person.grade }}급)</span> - {{ person.count }}명</h3>
        <p class="description">📝 {{ person.description }}</p>
        <div class="traits">
          <p v-for="trait in person.traits.split(', ')" :key="trait">
            {{ trait }}
          </p>
        </div>
        <button @click="selectCandidate(person)">선택하기</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

interface Person {
  name: string;
  grade: string;
  description: string;
  traits: string;
  count: number;
}

export default defineComponent({
  name: 'SelectView',
  setup() {
    const router = useRouter();

const allCandidates: Person[] = [
  {
    name: '군인',
    grade: 'A',
    description: '전투력은 높지만, 고지식하고 융통성이 없다.',
    traits: '체력: ★★★★☆, 전투력: ★★★★★, 신뢰도: ★★★☆☆, 통솔력: ★★★★☆, 판단력: ★★★★☆',
    count: 1,
  },
  {
    name: '의사',
    grade: 'A',
    description: '의료 지식과 치료 능력이 뛰어나며, 감정적으로 피로함을 자주 느낌.',
    traits: '체력: ★★☆☆☆, 전투력: ★☆☆☆☆, 신뢰도: ★★★★☆, 치유력: ★★★★★, 집중력: ★★★★☆',
    count: 5,
  },
  {
    name: '깡패',
    grade: 'D',
    description: '전투력은 높지만 도덕성과 협동심이 낮다.',
    traits: '체력: ★★★★☆, 전투력: ★★★★☆, 신뢰도: ★☆☆☆☆, 위협성: ★★★★★, 반항심: ★★★★☆',
    count: 1,
  },
  {
    name: '단정한 선생님',
    grade: 'B',
    description: '질서와 도덕을 중시하며 사람들을 하나로 모음.',
    traits: '체력: ★★☆☆☆, 전투력: ★☆☆☆☆, 신뢰도: ★★★★★, 조직력: ★★★★☆, 설득력: ★★★★☆',
    count: 1,
  },
  {
    name: '요리사',
    grade: 'B',
    description: '한정된 자원으로도 식량을 관리하고 공동체를 돌봄.',
    traits: '체력: ★★★☆☆, 전투력: ★☆☆☆☆, 신뢰도: ★★★☆☆, 요리 실력: ★★★★★, 식량 효율: ★★★★☆',
    count: 5,
  },
  {
    name: '정치가',
    grade: 'C',
    description: '말로 사람을 움직이지만 신뢰도는 낮다.',
    traits: '체력: ★★☆☆☆, 전투력: ★☆☆☆☆, 신뢰도: ★★☆☆☆, 외교력: ★★★★★, 전략 수립: ★★★★☆',
    count: 1,
  },
  {
    name: '해커',
    grade: 'C',
    description: '디지털 기술로 정보력은 뛰어나지만 커뮤력이 낮다.',
    traits: '체력: ★☆☆☆☆, 전투력: ★☆☆☆☆, 신뢰도: ★★★☆☆, 정보 수집력: ★★★★★, 침착성: ★★★★☆',
    count: 1,
  },
  {
    name: '경찰관',
    grade: 'B',
    description: '기본 전투력과 규율을 갖추고 공동체 질서를 유지.',
    traits: '체력: ★★★☆☆, 전투력: ★★★☆☆, 신뢰도: ★★★☆☆, 질서 유지: ★★★★☆, 책임감: ★★★★☆',
    count: 5,
  },
  {
    name: '농부',
    grade: 'B',
    description: '근면하고 자급자족에 유리함.',
    traits: '체력: ★★★★★, 전투력: ★★☆☆☆, 신뢰도: ★★★★☆, 식량 생산력: ★★★★★, 근면성: ★★★★★',
    count: 5,
  },
  {
    name: '연예인',
    grade: 'C',
    description: '분위기를 살리고 집단의 스트레스를 풀어줌.',
    traits: '체력: ★★☆☆☆, 전투력: ★☆☆☆☆, 신뢰도: ★★★☆☆, 사기 진작: ★★★★★, 매력: ★★★★★',
    count: 1,
  },
  {
    name: '노인 과학자',
    grade: 'C',
    description: '지식은 풍부하나 체력적으로 취약.',
    traits: '체력: ★☆☆☆☆, 전투력: ★☆☆☆☆, 신뢰도: ★★★★★, 지식: ★★★★★, 조언 능력: ★★★★☆',
    count: 1,
  },
  {
    name: '기계공',
    grade: 'B',
    description: '장비 수리에 능하고 실용적이나 무뚝뚝함.',
    traits: '체력: ★★★☆☆, 전투력: ★★☆☆☆, 신뢰도: ★★★☆☆, 기술력: ★★★★★, 장비 유지: ★★★★★',
    count: 3,
  },
  {
    name: '운동선수',
    grade: 'B',
    description: '체력과 스피드는 높지만, 전략이 부족.',
    traits: '체력: ★★★★★, 전투력: ★★★☆☆, 신뢰도: ★★★☆☆, 민첩성: ★★★★★, 생존 감각: ★★★★☆',
    count: 3,
  },
  {
    name: '스님',
    grade: 'B',
    description: '멘탈 케어와 갈등 중재에 탁월.',
    traits: '체력: ★★☆☆☆, 전투력: ★☆☆☆☆, 신뢰도: ★★★★★, 심리 안정: ★★★★★, 중재력: ★★★★☆',
    count: 1,
  },
  {
    name: '도둑',
    grade: 'C',
    description: '야간 잠입과 자원 탐색에 강하지만 신뢰받기 어렵다.',
    traits: '체력: ★★★☆☆, 전투력: ★★★☆☆, 신뢰도: ★☆☆☆☆, 야간 능력: ★★★★★, 은신력: ★★★★★',
    count: 2,
  },
  {
    name: '마술사',
    grade: 'C',
    description: '분위기를 밝히지만 실전에선 무력.',
    traits: '체력: ★★☆☆☆, 전투력: ★★☆☆☆, 신뢰도: ★★★☆☆, 심리 안정: ★★★☆☆, 의외성: ★★★★★',
    count: 1,
  },
  {
    name: '조커',
    grade: 'D',
    description: '무슨 짓을 할지 모르는 변수. 위기 상황에서 기적을 낼 수도, 망칠 수도.',
    traits: '체력: ★★☆☆☆, 전투력: ★★★☆☆, 신뢰도: ☆☆☆☆☆, 변수성: ★★★★★, 혼란 유발: ★★★★★',
    count: 1,
  },
  {
  name: '미친 과학자',
  grade: 'D',
  description: '기발한 발명품을 만들 수 있지만 예측불가능하고 위험함.',
  traits: '체력: ★☆☆☆☆, 전투력: ★★☆☆☆, 신뢰도: ★★☆☆☆, 창의력: ★★★★★, 위험성: ★★★★☆',
  count: 1,
},
{
  name: '퇴역 군인',
  grade: 'A',
  description: '풍부한 실전 경험을 바탕으로 전술에 능하지만 신체는 노쇠함.',
  traits: '체력: ★★☆☆☆, 전투력: ★★★★☆, 신뢰도: ★★★★☆, 전술 판단: ★★★★★, 경험: ★★★★★',
  count: 2,
},
{
  name: '괴짜 탐정',
  grade: 'B',
  description: '냄새를 잘 맡지만 혼자 행동하는 걸 좋아함.',
  traits: '체력: ★★☆☆☆, 전투력: ★★☆☆☆, 신뢰도: ★★★☆☆, 관찰력: ★★★★★, 고집: ★★★★☆',
  count: 1,
},
{
  name: '대학생',
  grade: 'C',
  description: '지식은 있지만 실전 경험이 전무함. 성장 가능성은 높음.',
  traits: '체력: ★★★☆☆, 전투력: ★☆☆☆☆, 신뢰도: ★★★☆☆, 학습 능력: ★★★★★, 유연성: ★★★★☆',
  count: 5,
},
{
  name: '배태랑 형사',
  grade: 'B',
  description: '사건 해결 능력은 뛰어나지만 주변과 자주 충돌함.',
  traits: '체력: ★★★☆☆, 전투력: ★★★★☆, 신뢰도: ★★☆☆☆, 직감: ★★★★★, 분노 조절: ★☆☆☆☆',
  count: 1,
},
{
  name: '도서관 사서',
  grade: 'C',
  description: '지식은 방대하지만 야외 환경에 취약.',
  traits: '체력: ★☆☆☆☆, 전투력: ★☆☆☆☆, 신뢰도: ★★★★★, 문서 정리: ★★★★★, 정보 분석: ★★★★☆',
  count: 2,
},
{
  name: '환경운동가',
  grade: 'C',
  description: '자연에 대한 깊은 이해가 있지만 실용성은 낮음.',
  traits: '체력: ★★★☆☆, 전투력: ★☆☆☆☆, 신뢰도: ★★★★☆, 생태 이해도: ★★★★★, 이상주의: ★★★☆☆',
  count: 1,
},
{
  name: '야생 생존 전문가',
  grade: 'A',
  description: '자연에서 살아남는 법을 몸으로 익힘.',
  traits: '체력: ★★★★★, 전투력: ★★★☆☆, 신뢰도: ★★★☆☆, 생존 스킬: ★★★★★, 침착함: ★★★★☆',
  count: 2,
},
{
  name: '좀비 마니아',
  grade: 'B',
  description: '가상의 생존 전략은 풍부하나 현실감이 떨어짐.',
  traits: '체력: ★★☆☆☆, 전투력: ★★☆☆☆, 신뢰도: ★★☆☆☆, 창의적 전략: ★★★★☆, 행동력: ★★★☆☆',
  count: 1,
},
{
  name: '전직 스턴트맨',
  grade: 'B',
  description: '위험한 상황에 대담하며 행동력이 뛰어남.',
  traits: '체력: ★★★★☆, 전투력: ★★★☆☆, 신뢰도: ★★★☆☆, 기동성: ★★★★★, 대담함: ★★★★★',
  count: 2,
},
{
  name: '재난 구조대원',
  grade: 'A',
  description: '위기 상황에서 빠른 판단과 구조 능력 보유.',
  traits: '체력: ★★★★☆, 전투력: ★★☆☆☆, 신뢰도: ★★★★★, 구조 능력: ★★★★★, 희생정신: ★★★★★',
  count: 1,
},
{
  name: '길거리 마술사',
  grade: 'C',
  description: '사람의 시선을 끄는 데 능하며 혼란을 유발함.',
  traits: '체력: ★★☆☆☆, 전투력: ★★☆☆☆, 신뢰도: ★★☆☆☆, 속임수: ★★★★★, 분위기 전환: ★★★★☆',
  count: 1,
},
{
  name: '심리상담가',
  grade: 'B',
  description: '팀의 정서적 균형을 맞춰주지만 상황판단은 늦음.',
  traits: '체력: ★★☆☆☆, 전투력: ★☆☆☆☆, 신뢰도: ★★★★★, 정서 케어: ★★★★★, 소통력: ★★★★★',
  count: 1,
}
];
    const candidates = ref<Person[]>([]);
    const selectedPeople = ref<Person[]>([]);

    // 등급 그룹화
    const groupByGrade = (grade: string): Person[] => {
      return allCandidates.filter(person => person.grade === grade);
    };

    // 등급 리스트에서 랜덤 등급 선택
    const getRandomGrade = (): string => {
      const grades = ['A', 'B', 'C', 'D'];
      const randomIndex = Math.floor(Math.random() * grades.length);
      return grades[randomIndex];
    };

    const shuffleCandidates = () => {
      const selectedGrade = getRandomGrade();
      const pool = groupByGrade(selectedGrade);
      const shuffled = [...pool].sort(() => 0.5 - Math.random());
      candidates.value = shuffled.slice(0, 2);
    };



     const selectCandidate = (person: Person) => {
      console.log(`선택된 생존자: ${person.name}`);
      selectedPeople.value.push(person);

      if (selectedPeople.value.length >= 100) {
        router.push('/intro');
      } else {
        shuffleCandidates();
      }
    };

    onMounted(() => {
      shuffleCandidates();
    });

    return {
      candidates,
      selectCandidate,
      selectedPeople
    };
  }
});
</script>

<style scoped>
.select-view {
  padding: 2rem;
  text-align: center;
}
.candidates {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}
.candidate {
  border: 1px solid #ccc;
  padding: 1.5rem;
  border-radius: 10px;
  width: 200px;
  background: #f9f9f9;
}
button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>
