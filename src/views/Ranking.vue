 <template>
  <div class="ranking container">
    <div class="sub-ranking">
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Nickname</th>
            <th scope="col">Score</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in peoples" :key="i">
            <td>
              <font-awesome-icon :icon="'heart'" :class="i === 0 ? 'fonts1' : i === 1 ? 'fonts2' : i === 2 ? 'fonts3' : 'fonts'" />
            </td>
            <td>{{item.nickname}}</td>
            <td>{{item.score}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Ranking",
  data: () => ({
    peoples: []
  }),
  created() {
    axios
      .get(
        `https://spotforca-server.herokuapp.com/rounds`
      )
      .then(response => {
        this.peoples = response.data;
      });
  }
};
</script>

<style scoped>
.ranking .table th {
  font-weight: 500;
  color: #95999c;
  text-transform: uppercase;
  font-size: 12px;
  border-width: 1px;
  border-color: #454d55;
  border-top: 0;
}
.ranking .sub-ranking {
  width: 80%;
  margin: 0 auto;
  padding: 16px !important;
  background-color: #222326;
  z-index: 1;
  padding: 16px !important;
  box-shadow: 3px 0px 16px 3px black;
}
.fonts1 {
  color: #ffe000;
  font-size: 18px;
}
.fonts2 {
  color: #adadad;
  font-size: 17px;
}
.fonts3 {
  color: #886b00;
  font-size: 16px;
}
.fonts {
  color: #676767;
  font-size: 14px;
}
.ranking {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ranking:before {
  content: "";
  background: #4f4f4f;
  z-index: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background-size: 40px;
  background-repeat: repeat;
  opacity: 0.1;
  background-blend-mode: luminosity;
  background-image: url(https://image.flaticon.com/icons/svg/174/174872.svg);
}
</style>
