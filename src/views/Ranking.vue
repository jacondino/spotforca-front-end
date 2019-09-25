 <template>
  <div class="ranking container">
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Nickname</th>
          <th scope="col">Score</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>
            <font-awesome-icon :icon="'heart'" class="fonts1" />
          </th>
          <td>Mark 1</td>
          <td>100</td>
        </tr>
        <tr>
          <th>
            <font-awesome-icon :icon="'heart'" class="fonts2" />
          </th>
          <td>Mark 2</td>
          <td>50</td>
        </tr>
        <tr>
          <th>
            <font-awesome-icon :icon="'heart'" class="fonts3" />
          </th>
          <td>Mark 3</td>
          <td>30</td>
        </tr>
        <tr>
          <th>
            <font-awesome-icon :icon="'heart'" class="fonts" />
          </th>
          <td>Mark 4</td>
          <td>20</td>
        </tr>
        <tr>
          <th>
            <font-awesome-icon :icon="'heart'" class="fonts" />
          </th>
          <td>Mark 5</td>
          <td>10</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Ranking"
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
}
.ranking .table {
  width: 50%;
  margin: 0 auto;
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
</style>
