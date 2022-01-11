  google.charts.load('current', {'packages':['gantt']});
      google.charts.setOnLoadCallback(drawChart);


    function daysToMilliseconds(days) {
      return days * 24 * 60 * 60 * 1000;
    }

    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Task ID');
      data.addColumn('string', 'Task Name');
      data.addColumn('date', 'Start Date');
      data.addColumn('date', 'End Date');
      data.addColumn('number', 'Duration');
      data.addColumn('number', 'Percent Complete');
      data.addColumn('string', 'Dependencies');

      data.addRows([
        ['T1', 'initiation', new Date(2022, 0, 10), new Date(2022, 0, 31), null,  100,  null],
        ['T2', 'planning', new Date(2022, 0, 31),new Date(2022, 1, 14), null, 25, 'T1'],
        ['T3', 'execution', new Date(2022, 1, 14), new Date(2022, 2, 10),null, 20, 'T2'],
        ['T4', 'closing', new Date(2022, 2, 10), new Date(2022, 3, 24),null, 0, 'T3'],
        ['T5','evaluations', new Date(2022, 3,24), new Date(2022,4,12), null, 50, 'T4'],
      
      ]);

      var options = {
        height: 275
      };

      var chart = new google.visualization.Gantt(document.getElementById('chart_div'));

      chart.draw(data, options);
    }
